window.addEventListener("load", () => {
      document.body.style.opacity = "1";
})

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("get-started-btn");

startBtn.addEventListener("click", async () => {
  const usernameInput = document.getElementById("username");
  const name = usernameInput.value.trim();

  if (!name) {
    alert("Please enter your name.")
    return;
  }

  
});

})

