const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "src")));
app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/services', express.static(path.join(__dirname, 'services')));
app.use((req, res) => {
  res.status(404).send("./src/pages/whoops.html");
})
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});


app.get("/api/highscores", (req, res) => {
  const usersPath = path.join(__dirname, "data", "highscores.json");
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read users" });

    const users = JSON.parse(data);
    res.json(users);
  });
});


app.post("/api/highscores", (req, res) => {
  const newUser = req.body;

  const usersPath = path.join(__dirname, "data", "highscores.json");
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read users" });

    const users = JSON.parse(data);
    users.push(newUser);

    fs.writeFile(usersPath, JSON.stringify(users, null, 2), err => {
      if (err) return res.status(500).json({ error: "Failed to write user" });
      res.status(201).json({ message: "User added", user: newUser });
    });
  });
});

app.get("/api/answers", (req, res) => {
  const answerPath = path.join(__dirname, "data", "answer.json");
  fs.readFile(answerPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read answers" });

    const answers = JSON.parse(data);
    res.json(answers);
  });
});

app.get("/api/category", (req, res) => {
  const categoryPath = path.join(__dirname, "data", "categories.json");
  fs.readFile(categoryPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read categories" });

    const categories = JSON.parse(data);
    res.json(categories);
  });
});

app.get("/api/questions", (req, res) => {
  const questionsPath = path.join(__dirname, "data", "questions.json");
  fs.readFile(questionsPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read quesions" });

    const questions = JSON.parse(data);
    res.json(questions);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
