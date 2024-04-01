const express = require('express');
const app = express();
const PORT = 4000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next()
}

const handleHome = (req, res) => {
  return res.send("여기는 핸들홈");
};

app.get("/", logger, handleHome)

const handleListening = () => {
  console.log(`Server listenting on part http://localhost:${PORT}`);
}

app.listen(PORT, handleListening)