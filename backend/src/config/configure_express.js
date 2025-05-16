const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const { addUser } = require("../sql_node");
const port = 3000;

app.use(bodyParser.json());
app.post("/api/users", async (req, res) => {
    const { name } = req.body;
  
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
  
    try {
      await addUser(name);
      return res.status(201).json({ message: `User '${name}' added successfully` });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error:error.message});
    }
  });
  app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
  });
  
  