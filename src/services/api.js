const getAnswers=async()=>{
  const res = await fetch("/api/answers");
  return await res.json();
}

const getCategory=async()=>{
  const res = await fetch("/api/category");
  return await res.json();
}

const getHighscores=async()=>{
  const res = await fetch("/api/getHighscores");
  return await res.json();
}

const addHighscores=async(user)=>{
  const res = await fetch("/api/addHighscores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  return await res.json();
}

module.exports={getAnswers,getcategory,addHighscores,getHighscores}
