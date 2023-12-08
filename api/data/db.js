import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { user, host, database, password, port } = process.env;

const { Pool } = pg;

export const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});