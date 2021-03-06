const express = require('express');
const app = express();

const colors = [
  { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 },
  { name: 'blue', hex: '0000FF', r: 0, g: 0, b: 255 },
  { name: 'green', hex: '00FF00', r: 0, g: 255, b: 0 }
]

app.use(express.static('./public'));
app.get('/api/v1/color',  (req, res) => {
  res.send(colors);
})

module.exports = app;