const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
  console.log(req.body);
  var x = Number(req.body.num1);
  var y = Number(req.body.num2);

  var result = x + y;
  res.send("The result from the calculation is " + result);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
