document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selectedCategory = btn.dataset.id;

    alert("Once you continue, the quiz will start immediately and the timer will begin. Be ready!");

    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("quizStartTime", Date.now());
    window.location.href = "../pages/quiz.html";
  });
});


// async function getQuestionsById(id) {
//   try {
//     const response = await fetch('src/data/questions.json'); 
//     if (!response.ok) throw new Error('Failed to fetch questions');
//     const data = await response.json();

//     const questions = data
//       .filter(item => item.category_id === id)
//       .map(item => item.question);

//     return questions;

//   } catch (error) {
//     throw new Error(error.message)
//   }
// }




