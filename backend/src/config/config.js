const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL environment variable.");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // possibly more config here
});

module.exports = { pool };