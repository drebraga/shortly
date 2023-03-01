import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const configDataBase = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
};

const db = new Pool(configDataBase);

export default db;