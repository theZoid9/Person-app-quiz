const getAnswers = async () => {
  try {
    const res = await fetch("https://person-app-quiz-production.up.railway.app/api/answers");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched answers:", data);
    return data;
  } catch (error) {
    console.error("Error fetching answers:", error);
  }
};

export const getCategory = async () => {
  try {
    const res = await fetch("https://person-app-quiz-production.up.railway.app/api/category");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched category:", data);
    return data;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};

const getHighscores = async () => {
  try {
    const res = await fetch("https://person-app-quiz-production.up.railway.app/api/highscores");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched highscores:", data);
    return data;
  } catch (error) {
    console.error("Error fetching highscores:", error);
  }
};


// services/api.js

/**

 */
const addHighScores = async (user) => {
  try {
    const res = await fetch("http://localhost:3000/api/highscores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to add highscore");
    }

    return result;
  } catch (error) {
    console.error("Error posting score:", error.message);
    throw error;
  }
};

module.exports = { addHighScores };
// module.exports={getAnswers,getCategory,addHighScores,getHighscores}
