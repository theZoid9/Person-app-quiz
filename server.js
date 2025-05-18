const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 


app.use(express.static(path.join(__dirname, "src")));
app.use("/pages", express.static(path.join(__dirname, "pages")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/styles", express.static(path.join(__dirname, "styles")));
app.use("/services", express.static(path.join(__dirname, "services")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});


app.post("/api/highscores", (req, res) => {
  const newUser = req.body;

  if (!newUser || !newUser.name || typeof newUser.score !== "number") {
    return res.status(400).json({ error: "Invalid user data" });
  }

  const filePath = path.join(__dirname, "data", "highscores.json");


  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read highscores" });
    }

    let highscores = [];
    try {
      highscores = JSON.parse(data);
    } catch (parseErr) {
      return res.status(500).json({ error: "Corrupted highscores data" });
    }

 
    highscores.push(newUser);

    fs.writeFile(filePath, JSON.stringify(highscores, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: "Failed to save highscore" });
      }

      res.status(201).json({ message: "User added", user: newUser });
    });
  });
});


app.get("/api/highscores", (req, res) => {
  const filePath = path.join(__dirname, "data", "highscores.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read highscores" });
    }

    try {
      const highscores = JSON.parse(data);
      res.json(highscores);
    } catch {
      res.status(500).json({ error: "Corrupted highscores file" });
    }
  });
});


app.get("/api/answers", (req, res) => {
  const filePath = path.join(__dirname, "data", "answer.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read answers" });
    res.json(JSON.parse(data));
  });
});

app.get("/api/category", (req, res) => {
  const filePath = path.join(__dirname, "data", "categories.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read categories" });
    res.json(JSON.parse(data));
  });
});

app.get("/api/questions", (req, res) => {
  const filePath = path.join(__dirname, "data", "questions.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read questions" });
    res.json(JSON.parse(data));
  });
});


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "pages", "whoops.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
