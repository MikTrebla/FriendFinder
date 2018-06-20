let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();

let htmlRoutes = require('./app/routing/htmlRoutes.js');
let apiRoutes = require('./app/routing/apiRoutes.js');


let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

let data = require('./app/data/friends.js');

app.listen(PORT, function () {
    console.log('APP listening on PORT ' + PORT);
});