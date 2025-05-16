const queries = {
  createTable: `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(250),
      score INTEGER
    );
  `,

  createCategoriesTable: `
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    );
  `,

  createQuestionsTable: `
    CREATE TABLE IF NOT EXISTS questions (
      id SERIAL PRIMARY KEY,
      category_id INTEGER NOT NULL REFERENCES categories(id),
      questions TEXT NOT NULL
    );
  `,

  createAnswersTable: `
    CREATE TABLE IF NOT EXISTS answers (
      id SERIAL PRIMARY KEY,
      question_id INTEGER NOT NULL REFERENCES questions(id),
      answer TEXT NOT NULL
    );
  `,

  addUserToDatabase: `
    INSERT INTO users (name) VALUES ($1);
  `
};

module.exports = { queries };
