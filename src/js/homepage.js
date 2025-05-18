
document.getElementById("getStartedBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();

    if (!username) {
      alert("Please enter a name.");
      return;
    }

    fetch("person-app-quiz-production.up.railway.app/api/highscores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: username ,"score": 0 })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
     
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });