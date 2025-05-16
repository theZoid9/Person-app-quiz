const queries = {
  createTable: `

    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY ,
      name varchar(250) ,
      score INTEGER          
  )`,
  createQuestionsTable: `

  CREATE TABLE IF NOT EXISTS questions(
    id SERIAL PRIMARY KEY ,
    questions varchar(250) 
         
)`
};
module.exports={queries}
