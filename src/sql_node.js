const { pool } = require("./config/config")
const { queries } = require("./helper_objects")

async function createTable() {
    await pool.query(queries.createTable, (error) => {
      if (error) {
        throw new Error(error.message);
      }
    });
    return "table users succefully created";
  }
  async function createQuestionTables(){
    await pool.query(queries.createQuestionsTable,(error)=>{
        if (error) {
            throw new Error(error.message);
          }
          return "table questions succefully created";

    })

  }
 /* createTable().then(result => {
    console.log(result);
  })*/
  createQuestionTables().then(message=>{
    console.log(message)
  })