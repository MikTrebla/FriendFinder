var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/', express.static('app/data'));
module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        return res.json(friends)
    });
    
    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
    
}




// app.get('/api/friends/:friends', function (req, res) {
//     var friendName = req.params.character;
//     console.log(chosen);
//     for (var i = 0; i < friends.length; i++) {
//         if (friendName === friends[i].routeName) {
//             return res.json(characters[i]);
//         }
//     }
//     return res.json(false);
// });