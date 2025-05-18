const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/users", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newUser = { name, createdAt: new Date().toISOString() };

  const filePath = path.join(__dirname, "data", "users.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let users = [];
    if (!err && data) {
      try {
        users = JSON.parse(data);
      } catch (parseErr) {
        console.error("Error parsing users.json:", parseErr);
      }
    }

    users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error writing to users.json:", writeErr);
        return res.status(500).json({ error: "Failed to save user" });
      }

      res.status(201).json({ message: "User saved successfully" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
