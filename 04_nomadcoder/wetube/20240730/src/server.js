import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log("여기는 미들웨어");
  next();
}

const handleHome = (req, res) => {
  console.log("여기는 홈");
  return res.end();
}

app.get("/", gossipMiddleware, handleHome)

const handleListening = () => {
  console.log(`http://localhost:${PORT}`);
}

app.listen(PORT, handleListening)