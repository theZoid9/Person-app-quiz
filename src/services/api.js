const getUsers=async()=>{
  const res = await fetch("/api/users");
  return await res.json();
}

const getAnswers=async()=>{
  const res = await fetch("/api/answers");
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

module.exports={addUser,getUsers}