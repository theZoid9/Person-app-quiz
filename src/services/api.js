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


const addHighScores = async (user) => {
  try {
    const res = await fetch("https://person-app-quiz-production.up.railway.app/api/highscores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error posting score:", error);
  }
};


export default addHighScores
// module.exports={getAnswers,getCategory,addHighScores,getHighscores}
