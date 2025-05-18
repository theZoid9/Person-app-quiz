import addHighScores from '../services/storage.js'
const messageBox = document.getElementById("messageBox");

function showMessage(message, type = "success") {
  messageBox.textContent = message;
  messageBox.className = `message ${type}`;
  messageBox.style.display = "block";
}

const startForm = document.getElementById("start-form");

startForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value.trim();

  if (!username) {
    showMessage("Please enter your name.", "error");
    return;
  }

  try {
    const user = { name: username, score: 0 };
    const result = await addHighScores(user);

    if (result && result.message === "Success") {
      showMessage(`Nice name ${username}, signing you in`, "success");
      setTimeout(() => {
      window.location.href = "../pages/category.html";
    }, 2000);
    } else {
      alert("Failed to save high score.");
    }
  } catch (error) {
    showMessage("Failed to sign up, please try again.", "error");
  }
});
