import express from "express";
import morgan from "morgan";


const app = express();
const PORT = 4000;
const logger = morgan("dev");

const home = (req, res) => {
  return res.send("여기는 홈");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => {
  console.log(`Server listenting on part http://localhost:${PORT}`);
}

app.listen(PORT, handleListening)