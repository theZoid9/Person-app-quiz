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
      question TEXT NOT NULL
    );
  `,

  createAnswersTable: `
    CREATE TABLE IF NOT EXISTS answers (
      id SERIAL PRIMARY KEY,
      question_id INTEGER NOT NULL REFERENCES questions(id),
      answers TEXT NOT NULL
    );
  `,

  createLeaderboardTable: `
    CREATE TABLE IF NOT EXISTS leadboard (
      id SERIAL PRIMARY KEY,
      user_name TEXT NOT NULL,
      score INTEGER NOT NULL
    );
  `,

  insertCategories: `
  INSERT INTO categories (name) VALUES
  ('Hardware'),
  ('Operating Systems'),
  ('Web Development'),
  ('Network');
`,

  insertQuestions: `
    INSERT INTO questions (id, category_id, question)
    VALUES
      (1, 1, 'What does CPU stand for?'),
      (2, 1, 'What does PSU stand for?'),
      (3, 1, 'GPU stands for?'),
      (4, 1, 'What does RAM stand for?'),

      (5, 2, 'What does an operating system do?'),
      (6, 2, 'Which of these is an operating system?'),
      (7, 2, 'What type of software is MS Excel?'),
      (8, 2, 'What is the purpose of antivirus software?'),

      (9,  3, 'What does HTML stand for?'),
      (10, 3, 'Which data type is NOT in JavaScript?'),
      (11, 3, 'What does JS stand for?'),
      (12, 3, 'What does CSS stand for?'),

      (13, 4, 'What does IP stand for?'),
      (14, 4, 'Which device directs data between networks?'),
      (15, 4, 'What is secure web protocol?'),
      (16, 4, 'HTTP port?');
      
  `,

  insertAnswers: `
    INSERT INTO answers (question_id, answers)
    VALUES
    
      (1, 'Central Processing Unit'),
      (1, 'Central Progress Unit'),
      (1, 'Center Park Unit'),
      (1, 'Cd Papper Unit'),

      (2, 'Power Supply Unit' ),
      (2, 'Power Super Unit'),
      (2, 'Power Small User'),
      (2, 'Power Supply Users'),

      (3, 'Graphics Processing Unit'),
      (3, 'Gaming Program Utility'),
      (3, 'Graphical Power Unit'),
      (3, 'Graphic Performance Unit'),

      (4, 'Random Access Memory'),
      (4, 'Read Access Memory'),
      (4, 'Run Active Memory'),
      (4, 'Random Allocation Mother'),

      (5, 'Manages hardware and software'),
      (5, 'Increases brightness'),
      (5, 'Connects to the internet'),
      (5, 'Deletes apps'),

      (6, 'Windows'),
      (6, 'Microsoft Word'),
      (6, 'Photoshop'),
      (6, 'World of Warcraft'),

      (7, 'Spreadsheet application'),
      (7, 'System software'),
      (7, 'Database'),
      (7, 'Web browser'),

      (8, 'Detect and remove malware'),
      (8, 'Speed up internet'),
      (8, 'Block ads'),
      (8, 'Update drivers'),

      (9, 'HyperText Markup Language'),
      (9, 'Hyperlink Text Markup Language'),
      (9, 'Home Tool Markup Language'),
      (9, 'HighText Machine Language'),

      (10, 'Integer'),
      (10, 'String'),
      (10, 'Boolean'),
      (10, 'Undefined'),

      (11, 'JavaScript'),
      (11, 'Java System'),
      (11, 'Just Script'),
      (11, 'Join Style'),

      (12, 'Cascading Style Sheets'),
      (12, 'Creative Style Scripts'),
      (12, 'Control Style Sheet'),
      (12, 'Custom Styling Source'),

      (13, 'Internet Protocol'),
      (13, 'Input Port'),
      (13, 'Internal Program'),
      (13, 'Info Path'),

      (14, 'Router'),
      (14, 'Switch'),
      (14, 'Hub'),
      (14, 'Modem'),

      (15, 'HTTPS'),
      (15, 'FTP'),
      (15, 'SSH'),
      (15, 'HTTP'),

      (16, '80'),
      (16, '21'),
      (16, '443'),
      (16, '110');
  `,


  addUserToDatabase: `
    INSERT INTO users (name) VALUES ($1);
  `,
  getAllCategories:`SELECT * FROM categories`,
  getQuestionByCatergory:`SELECT * FROM questions WHERE category_id = $1;`,
  getAllAnswersForQuestion:` SELECT answers FROM answers WHERE question_id = $1;`
};

module.exports = { queries };
