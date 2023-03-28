var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From C8" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "C8 FUTURE IS HERE" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "C8 APP Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
