import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    root:"root",
    password:"123456",
    database:"social"
})