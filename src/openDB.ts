import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDB() {
  return await open({
    filename: "./microphones.sqlite",
    driver: sqlite3.Database,
  });
}
