const {
  getHighscores
} = require('../services/api');

document.getElementById("getStartedBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    alert("Please enter your name!");
    return;
  }

  getHighscores(username);
});