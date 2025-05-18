const getUsers=async()=>{
  const res = await fetch("/api/users");
  return await res.json();
}

const getAnswers=async()=>{
  const res = await fetch("/api/answers");
  return await res.json();
}

const getcategory=async()=>{
  const res = await fetch("/api/category");
  return await res.json();
}

const getleaderboard=async()=>{
  const res = await fetch("/api/leaderboard");
  return await res.json();
}

const addUser =async(user)=>{
  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  return await res.json();
}

module.exports={addUser,getUsers,getAnswers,getcategory,getleaderboard}