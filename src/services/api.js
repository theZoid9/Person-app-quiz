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


const addHighscores=async(user,score)=>{
  const res = await fetch("/api/highscores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({name: user, score: score})
  });
  return await res.json();
}

addHighscores("Aaron",10)

module.exports={getAnswers,getCategory,addHighscores,getHighscores}
