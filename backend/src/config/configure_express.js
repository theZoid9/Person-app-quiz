app.use(express.static(path.join(__dirname, "../../../frontend")));


const express = require("express");
const bodyParser = require("body-parser");
const { pool } = require("./config"); 
const { queries } = require("../helper_objects");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.post("/api/users", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    await pool.query(queries.addUserToDatabase, [name]);

    return res.status(201).json({ message: `User '${name}' added successfully` });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/categories", async (req, res) => {
  try {
    const result = await pool.query(queries.getAllCategories);
    res.status(200).json(result.rows); 
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/questions/:categoryId", async (req, res) => {
  const { categoryId } = req.params;

  if (!categoryId) {
    return res.status(400).json({ error: "Category ID is required" });
  }

  try {
    const result = await pool.query(queries.getQuestionByCatergory, [categoryId]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/answers/:questionId", async (req, res) => {
  const { questionId } = req.params;

  if (!questionId) {
    return res.status(400).json({ error: "Question ID is required" });
  }

  try {
    const result = await pool.query(queries.getAllAnswersForQuestion, [questionId]);
    res.status(200).json(result.rows); 
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
