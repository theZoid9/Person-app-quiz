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

  createLeaderboardTable: `
    CREATE TABLE IF NOT EXISTS leadboard (
      id SERIAL PRIMARY KEY,
      user_name TEXT NOT NULL,
      score INTEGER NOT NULL
    );
  `,

  insertQuestions: `
    INSERT INTO questions (id, category_id, question)
    VALUES
      (1, 1, 'What does CPU stand for?'),
      (2, 1, 'What does PSU stand for'),
      (3, 1, 'GPU stands for?'),
      (4, 1, 'What does RAM stand for?')

      (5, 2, 'What does an operating system do?'),
      (6, 2, 'Which of these is an operating system?'),
      (7, 2, 'What type of software is MS Excel?'),
      (8, 2, 'What is the purpose of antivirus software'),

      (9,  3, 'What does HTML stand for?'),
      (10, 3, 'Which data type is NOT in JavaScript?'),
      (11, 3, 'What does JS stand for?'),
      (12, 3, 'What does CSS stand for?'),

      (13, 4, 'What does IP stand for?'),
      (14, 4, 'Which device directs data between networks?'),
      (15, 4, 'What is secure web protocol?'),
      (16, 4, 'HTTP port?'),
      
  `,

  insertAnswers: `
    INSERT INTO answers (question_id, answer, is_correct)
    VALUES
    
      (1, 'Central Processing Unit', true),
      (1, 'Central Progress Unit', false),
      (1, 'Center Park Unit', false),
      (1, 'Cd Papper Unit', false),

      (2, 'Power Supply Unit', true),
      (2, 'Power Super Unit', false),
      (2, 'Power Small User', false),
      (2, 'Power Supply Users', false),

      (3, 'Graphics Processing Unit', true),
      (3, 'Gaming Program Utility', false),
      (3, 'Graphical Power Unit', false),
      (3, 'Graphic Performance Unit', false),

      (4, 'Random Access Memory', true),
      (4, 'Read Access Memory', false),
      (4, 'Run Active Memory', false),
      (4, 'Random Allocation Mother', false),

      (5, 'Manages hardware and software', true),
      (5, 'Increases brightness', false),
      (5, 'Connects to the internet', false),
      (5, 'Deletes apps', false),

      (6, 'Windows', true),
      (6, 'Microsoft Word', false),
      (6, 'Photoshop', false),
      (6, 'World of Warcraft', false),

      (7, 'Spreadsheet application', true),
      (7, 'System software', false),
      (7, 'Database', false),
      (7, 'Web browser', false),

      (8, 'Detect and remove malware', true),
      (8, 'Speed up internet', false),
      (8, 'Block ads', false),
      (8, 'Update drivers', false),

      (9, 'HyperText Markup Language', true),
      (9, 'Hyperlink Text Markup Language', false),
      (9, 'Home Tool Markup Language', false),
      (9, 'HighText Machine Language', false),

      (10, 'Integer', true),
      (10, 'String', false),
      (10, 'Boolean', false),
      (10, 'Undefined', false),

      (11, 'JavaScript', true),
      (11, 'Java System', false),
      (11, 'Just Script', false),
      (11, 'Join Style', false),

      (12, 'Cascading Style Sheets', true),
      (12, 'Creative Style Scripts', false),
      (12, 'Control Style Sheet', false),
      (12, 'Custom Styling Source', false),

      (13, 'Internet Protocol', true),
      (13, 'Input Port', false),
      (13, 'Internal Program', false),
      (13, 'Info Path', false),

      (14, 'Router', true),
      (14, 'Switch', false),
      (14, 'Hub', false),
      (14, 'Modem', false),

      (15, 'HTTPS', true),
      (15, 'FTP', false),
      (15, 'SSH', false),
      (15, 'HTTP', false),

      (16, '80', true),
      (16, '21', false),
      (16, '443', false),
      (16, '110', false);
  `,


  addUserToDatabase: `
    INSERT INTO users (name) VALUES ($1);
  `
};

module.exports = { queries };
