const queries = {
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

    insertQuestions: `
    INSERT INTO questions (id, category_id, question)
    VALUES
      (1, 1, 'What does stand for CPU?'),
      (2, 1, 'What does a power supply unit (PSU) do?'),
      (3, 1, 'GPU stands for?'),
      (4, 1, 'What does RAM stand for?')

      (5, 2, ' What does an operating system do?'),
      (6, 2, 'Which of these is an operating system?'),
      (7, 2, 'What type of software is MS Excel?'),
      (8, 2, 'What is the purpose of antivirus software')

      (9,  3, 'What does HTML stand for?'),
      (10, 3, 'Which data type is NOT in JavaScript?'),
      (11, 3, 'What does JS stand for?'),
      (12, 3, 'What does CSS stand for?')

      (12, 4, 'What does IP stand for?'),
      (13, 4, 'Which device directs data between networks?'),
      (14, 4, 'What is secure web protocol?'),
      (15, 4, 'HTTP port?'),
      
  `,

  addUserToDatabase: `
    INSERT INTO users (name) VALUES ($1);
  `
};

module.exports = { queries };
