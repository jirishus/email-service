const express = require('express');
const app = express();
const PORT = 3000;


app.get('/hello', function (req, res) {
  res.send('Hello World')
});

 
app.listen(PORT);
console.log(`App started on port: ${ PORT }`);