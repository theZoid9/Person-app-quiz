const { pool } = require("./config/config");
const { queries } = require("./helper_objects");

async function createUsersTable() {
  await pool.query(queries.createTable, (error) => {
    if (error) {
      throw new Error(error.message);
    }
  });
  return "table users succefully created";
}
async function createQuestionsTable() {
  await pool.query(queries.createQuestionsTable, (error) => {
    if (error) {
      throw new Error(error.message);
    }
    return "table questions succefully created";
  });
}

async function createAnswersTable() {
  await pool.query(queries.createAnswersTable, (error) => {
    if (error){
      throw new Error(error.message);
    }
    return "table answers succefully created";
  });
}

async function addUser(name) {
  try {
    const result = await pool.query(queries.addUserToDatabase, [name]);
    return `User '${name}' successfully added to the database`;
  } catch (error) {
    throw new Error("Error adding user: " + error.message);
  }
}


createUsersTable().then((result) => {
  console.log(result);
});
createQuestionsTable().then((message) => {
  console.log(message);
});
createAnswersTable().then((message) => {
  console.log(message);
});
addUser().then((message) => {
  console.log(message);
});


module.exports = {
   createUsersTable, 
   createQuestionsTable, 
   createAnswersTable, 
   addUser }


   
/*addUser("paseka mogoto").then((message) => {
  console.log(message);
});*/
