const express = require('express');
const app = express();
const port = 4000;

const handleListening = () => {
  console.log(`http://localhost:${port}`);
}

app.listen(port, handleListening);

app.get('/', (req, res) => {
  return res.send('노드몬 연결 완료!!');
})