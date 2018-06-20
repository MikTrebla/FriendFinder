var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.text());


// app.use('/', express.static('app/public'));
// app.use('/', express.static('app/routing'));
// app.use('/', express.static('app/data'));

app.use(express.static(path.join(__dirname, './app/public')));
// app.use(express.static(path.join(__dirname, './app/data')));
// app.use(express.static(path.join(__dirname, './app/routing')));


require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function () {
    console.log('APP listening on PORT ' + PORT);
});