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
  createTable().then(result => {
    console.log(result);
  })