const express = require('express');
const app = express();
const PORT = 3000;


app.get('/hello', function (req, res) {
  res.send('Hello World')
});

app.get('/emailPayload', function (req, res) {
  res.send('receiveding pauyload');
});

 
app.listen(PORT);
console.log(`App started on port: ${ PORT }`);