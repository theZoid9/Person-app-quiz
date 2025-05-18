
export const getAnswers = async () => {
  try {
    const res = await fetch("../data/answers.json");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("Fetched answers:", data);
    return data;
  } catch (error) {
    console.error("Error fetching answers:", error);
  }
};


export const getCategory = async () => {
  try {
    const res = await fetch("../data/categories.json");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("Fetched category:", data);
    return data;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};


export const getHighscores = async () => {
  try {
    const data = JSON.parse(localStorage.getItem("highscores")) || [];
    console.log("Fetched highscores from localStorage:", data);
    return data;
  } catch (error) {
    console.error("Error reading highscores:", error);
    return [];
  }
};

const addHighScores = async (user) => {
  try {
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push(user);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    return { message: "Success", user };
  } catch (error) {
    console.error("Error saving highscore:", error);
    throw error;
  }
};

export default addHighScores;
