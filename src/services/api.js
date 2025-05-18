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


const addHighscores=async(user)=>{
  const res = await fetch("/api/highscores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  console.log(res.json())
  return await res.json();
}
const user = {name:"Aaron", score: 10}
addHighscores(user)

module.exports={getAnswers,getCategory,addHighscores,getHighscores}
