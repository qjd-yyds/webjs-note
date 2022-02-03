const express = require('express');
const path = require('path');
const host = 'http://localhost';
const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, function () {
  console.log(`app is running${host}:${port}`);
});
