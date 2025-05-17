fetch('http://localhost:3000/api/categories')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Categories:", data);
    const list = document.getElementById('category-btn');
    data.forEach(category => {
      const li = document.createElement('button');
      li.textContent = category.name; 
   
     
    });
  })
  .catch(error => {
    console.error("Fetch error:", error.message);
  });
