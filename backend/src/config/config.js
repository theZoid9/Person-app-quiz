const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://postgres:pass@localhost:5432/quiz`,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
});
pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle PostgreSQL client", err);
  process.exit(-1);
});

module.exports = { pool };
