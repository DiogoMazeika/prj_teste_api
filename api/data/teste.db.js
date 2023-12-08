import { pool } from "./db.js";

export function teste() {
  return pool.query(
    `
    select * from esporte
    `,
    []
  );
  }