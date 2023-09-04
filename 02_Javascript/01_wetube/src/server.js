import express from "express";

const POST = 4000
const app = express();

const handleHome = (req, res) => {
  return res.send("<p>나는 여전히 배가 고프다</p>")
}
const handleLogin = (req, res) => {
  return res.send("<h1>로그인은 여기서</h1>")
}

app.get("/", handleHome)
app.get("/login", handleLogin)

const handleListening = () => {console.log(`서버 시작!✈️  http://localhost:${POST}`)}

app.listen(POST, handleListening);