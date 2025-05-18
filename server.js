const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});


app.get("/api/users", (req, res) => {
  const usersPath = path.join(__dirname, "data", "users.json");
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read users" });

    const users = JSON.parse(data);
    res.json(users);
  });
});


app.post("/api/users", (req, res) => {
  const newUser = req.body;

  const usersPath = path.join(__dirname, "data", "users.json");
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


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
