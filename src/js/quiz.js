const fs = require('fs');

const answers = JSON.parse(fs.readFileSync('src/data/answer.json', 'utf8'));

function getOptionById(id) {
 
  const question = answers.find(q => q.question_id === id);
  return question ? question.options : [];
}

console.log(getOptionById(1));