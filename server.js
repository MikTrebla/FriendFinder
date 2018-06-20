var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// app.use(express.static(path.join(__dirname,'/public')));
// app.use(express.static(path.join(__dirname, '/routing')));
app.use('/', express.static('public'));
app.use('/', express.static('routing'));



app.listen(PORT, function () {
    console.log('APP listening on PORT ' + PORT);
});