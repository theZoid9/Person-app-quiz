  document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "quiz.html";
    });
  });

async function getQuestionsById(id) {
  try {
    const response = await fetch('src/data/questions.json'); 
    if (!response.ok) throw new Error('Failed to fetch questions');
    const data = await response.json();

    const questions = data
      .filter(item => item.category_id === id)
      .map(item => item.question);

    return questions;

  } catch (error) {
    throw new Error(error.message)
  }
}




