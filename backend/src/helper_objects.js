const queries = {
  createTable: `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(250),
      score INTEGER
    )`,

  createQuestionsTable: `
    CREATE TABLE IF NOT EXISTS questions (
      id SERIAL PRIMARY KEY,
      questions VARCHAR(250)
    )`,

  addUserToDatabase: `
    INSERT INTO users (name) VALUES ($1)`
};

module.exports = { queries };
