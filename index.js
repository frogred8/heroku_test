var express = require('express');
var app = express();

app.get('/ping', function (req, res) {
  res.send('pong');
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
