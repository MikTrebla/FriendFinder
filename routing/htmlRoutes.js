var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'));
});