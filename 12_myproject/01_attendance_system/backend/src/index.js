import express from 'express';

const app = express();
const PORT = 5000;

const handelStartServer = () => {
  console.log(`http://localhost:${PORT}`);
};

app.listen(PORT, handelStartServer)