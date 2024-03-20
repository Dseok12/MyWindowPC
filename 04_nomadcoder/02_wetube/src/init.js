const express = require('express');
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('노드몬 연결 완료!!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})