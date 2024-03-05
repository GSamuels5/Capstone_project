import { createPool } from "mysql";
import {config} from "dotenv";
config()
let connection = createPool({
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    multipleStatements: true,
    connectionLimit: 30
})

export {
    connection
}