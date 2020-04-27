const express = require('express');
const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('http://localhost:3000');
})
