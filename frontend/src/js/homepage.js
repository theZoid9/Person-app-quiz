window.addEventListener("load", () => {
      document.body.style.opacity = "1";
})

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("get-started-btn");

    startBtn.addEventListener("click", async () => {
      const usernameInput = document.getElementById("username");
      const name = usernameInput.value.trim();

      if (!name) {
        alert("Please enter your name.");
        return;
      }

      try {
        const response = await fetch("https://localhost:3000/api/leaderboard",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name}),
        });

        const result = await response.json();

        if (response.ok) {
          console.log(result.message);
          window.location.href = "../pages/category.html";
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        alert("Failed to connect to the server.");
        console.error("Fetch error:", error);
      }
    });
})

