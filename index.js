var express = require('express');
var http = require('http');
var app = express();

app.get('/ping', function (req, res) {
  res.send('pong');
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});

setInterval(function() {
  http.get('http://heroku-test-jonghan.herokuapp.com/ping');
}, 20 * 60 * 1000);