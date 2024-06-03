import mongoose from "mongoose";

mongoose.connect();

const db = mongoose.connection;

const handleOpen = () => {console.log("DB 연결 성공")}
const handleError = (error) => {console.log("DB Error", error)}
db.on("error", handleError)
db.once("open", handleOpen)
