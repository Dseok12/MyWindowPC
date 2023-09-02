import express from "express";

const app = express();

const POST = 4000

const handleListening = () => {console.log(`서버 시작!✈️  http://localhost:${POST}`)}

app.listen(POST, handleListening);