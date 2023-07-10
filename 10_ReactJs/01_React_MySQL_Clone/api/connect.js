import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    root:"root",
    password:"",
    database:"social"
})