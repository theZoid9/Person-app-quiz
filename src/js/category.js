document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selectedCategory = btn.dataset.id;

    alert("Once you press OK, the quiz will start immediately and the timer will begin. Be ready!");

    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("quizStartTime", Date.now());
    window.location.href = "../pages/quiz.html";
  });
});





