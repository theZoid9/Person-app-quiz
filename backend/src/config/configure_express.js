const express = require("express");


const app = express();
const bodyParser = require("body-parser");
const { addUser, getAllCategories } = require("../sql_node");
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

  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await getAllCategories();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


  app.get("/api/categories/:id/questions", async (req, res) => {
    const categoryId = parseInt(req.params.id);
  
    if (isNaN(categoryId)) {
      return res.status(400).json({ error: "Invalid category ID" });
    }
  
    try {
      const questions = await getQuestionsForSingleCategory(categoryId);
      return res.status(200).json(questions);
    } catch (error) {
      console.error(`Error fetching questions for category ${categoryId}:`, error.message);
      return res.status(500).json({ error: error.message });
    }
  });

  app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
  });
  
  