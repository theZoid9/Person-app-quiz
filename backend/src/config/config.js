const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER ?? "user",
  host: process.env.DB_HOST ?? "localhost",
  database: process.env.DB_NAME ?? "quiz",
  password: process.env.DB_PASSWORD ?? "pass",
  port: process.env.DB_PORT || 5432,
});

pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle PostgreSQL client", err);
  process.exit(-1);
});

module.exports = { pool };
