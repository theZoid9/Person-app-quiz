  /*document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "quiz.html";
    });
  });
*/

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));

function getQuestionsById(id){
  const data = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));
  let questions=[]

  for(let i=0;i<data.length;i++){

    if(data[i].category_id===id){
      questions.push(data[i].question)

    }


  }
  return questions


}
console.log(getQuestionsById(1))

