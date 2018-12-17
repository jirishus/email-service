const express = require('express');
var bodyParser = require('body-parser');


const app = express();
const PORT = 3000;


// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/hello', function (req, res) {
  res.send('Hello World')
});

app.post('/emailPayload', function (req, res) {
  console.log('receiving payload');
  console.log('-------------------');
  console.log(req.body);
  res.send('receiveding pauyload');
});

 
app.listen(PORT);
console.log(`App started on port: ${ PORT }`);


 
// POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })
 
// POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   // create user in req.body
// })
