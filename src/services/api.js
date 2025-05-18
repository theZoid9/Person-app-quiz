const getAnswers=async()=>{
  const res = await fetch("https://person-app-quiz-production.up.railway.app/api/answers");
  return await res.json();
}

const getCategory=async()=>{
  const res = await fetch("https://person-app-quiz-production.up.railway.app/api/category");
  return await res.json();
}

const getHighscores=async()=>{
  const res = await fetch("https://person-app-quiz-production.up.railway.app/api/highscores");
  return await res.json();
}


const addHighscores=async(user)=>{
  const res = await fetch("https://person-app-quiz-production.up.railway.app/api/highscores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
  return await res.json();
}
const user = {name:"Khanyiso", score: 20}
const user1 = {name:"Zaid", score: 14}
const user2 = {name:"Paseka", score: 16}
addHighscores(user)
addHighscores(user1)
addHighscores(user2)

module.exports={getAnswers,getCategory,addHighscores,getHighscores}
