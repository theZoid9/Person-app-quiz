const { pool } = require("./config/config");
const { queries } = require("./helper_objects");

async function createCategoriesTable() {
  try {
    await pool.query(queries.createCategoriesTable);
    return "Table 'categories' successfully created";
  } catch (error) {
    throw new Error("Error creating 'categories' table: " + error.message);
  }
}

async function createQuestionsTable() {
  try {
    await pool.query(queries.createQuestionsTable);
    return "Table 'questions' successfully created";
  } catch (error) {
    throw new Error("Error creating 'questions' table: " + error.message);
  }
}

async function createAnswersTable() {
  try {
    await pool.query(queries.createAnswersTable);
    return "Table 'answers' successfully created";
  } catch (error) {
    throw new Error("Error creating 'answers' table: " + error.message);
  }
}

async function createLeaderboardTable() {
  try {
    await pool.query(queries.createLeaderboardTable);
    return "Table 'leaderboard' successfully created";
  } catch (error) {
    throw new Error("Error creating 'leaderboard' table: " + error.message);
  }
}

async function insertCategories() {
  try {
    await pool.query(queries.insertCategories);
    console.log("Categories inserted");
  } catch (error) {
    console.error("Insert categories error:", error.message);
  }
}

async function insertQuestions() {
  try {
    await pool.query(queries.insertQuestions);
    console.log("Questions inserted");
  } catch (error) {
    console.error("Insert questions error:", error.message);
  }
}

async function insertAnswers() {
  try {
    await pool.query(queries.insertAnswers);
    console.log("Answers inserted");
  } catch (error) {
    console.error("Insert answers error:", error.message);
  }
}

// Full DB Setup testing
async function setupDatabase() {
  try {
    console.log("Setting up database...");

    const categoriesMsg = await createCategoriesTable();
    console.log(categoriesMsg);

    const questionsMsg = await createQuestionsTable();
    console.log(questionsMsg);

    const answersMsg = await createAnswersTable();
    console.log(answersMsg);

    const leaderboardMsg =  await createLeaderboardTable();
    console.log(leaderboardMsg);


    await insertCategories();
    await insertQuestions();
    await insertAnswers();

  } catch (error) {
    console.error("Setup error:", error.message);
  } finally {
    await pool.end();
  }
}

setupDatabase();

module.exports = {
  createCategoriesTable,
  createQuestionsTable,
  createAnswersTable,
  createLeaderboardTable
};



/*addUser("paseka mogoto").then((message) => {
  console.log(message);
});*/
