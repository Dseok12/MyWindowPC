import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev")


const handleHome = (req, res) => {
  console.log("여기는 홈");
  return res.end();
}

app.use(logger)
app.get("/", handleHome);

const handleListening = () => {
  console.log(`http://localhost:${PORT}`);
}

app.listen(PORT, handleListening)