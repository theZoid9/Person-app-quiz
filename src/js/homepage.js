import addHighScores from '../services/api.js'

const startForm = document.getElementById("start-form");

startForm.addEventListener("submit", async (event) => {
  event.preventDefault()
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value.trim();

  if (!username) {
    alert("Please enter your name.");
    return;
  }
  try {
    const user = {name: username, score: 0}
    const response = await addHighScores(user)
    const result = await response.json()

    if(response.ok){
      console.log(result.message);
      window.location.href = "../pages/category.html";
    }else{
      alert("Error: " + result.error)
    }
  }catch(error){
    alert("Failed to connect to the server.", error.message)
  }
})
