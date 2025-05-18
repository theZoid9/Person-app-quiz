const getAnswers=async()=>{
  const res = await fetch("/api/answers");
  return await res.json();
}

const getCategory=async()=>{
  const res = await fetch("/api/category");
  return await res.json();
}

const getHighscores=async()=>{
  const res = await fetch("/api/highscores");
  return await res.json();
}


const addHighscores = async (user) => {
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

const user = {name:"Khanyiso", score: 20}
const user1 = {name:"Zaid", score: 14}
const user2 = {name:"Paseka", score: 16}
addHighscores(user)

module.exports={getAnswers,getCategory,addHighscores,getHighscores}
