function renderCategoryButtons(categories) {
  const container = document.getElementById('category-btn');
  if (!container) return;

  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category.name;
    button.classList.add("category-btn");

    // 👇 Add the event listener directly
    button.addEventListener("click", () => {
      // Remove 'selected' class from all buttons
      const allButtons = document.querySelectorAll(".category-btn");
      allButtons.forEach(b => b.classList.remove("selected"));

      // Add it to the one clicked
      button.classList.add("selected");
    });

    container.appendChild(button);
  });
}