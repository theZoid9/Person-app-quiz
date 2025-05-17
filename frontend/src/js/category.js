const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  })
})
