const queries = {
  createTable: `

    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY ,
      name varchar(250) ,
      score INTEGER          
  )`,
};
module.exports={queries}
