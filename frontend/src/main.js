fetchCategories()
  .then(data => {
    console.log("Fetched categories:", data);
    renderCategoryButtons(data);
  })
  .catch(error => {
    console.error("Error loading categories:", error.message);
  });
