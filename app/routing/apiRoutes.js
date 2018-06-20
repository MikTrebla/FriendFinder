let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let router = express.Router();

let data = require('../data/friends.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

router.get('/friends', function (req, res) {
    return res.json(data)
});

module.exports = router;

router.post('/friends', function (req, res) {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    data.push(newFriend);
    res.json(newFriend);
});





// app.get('/friends/:friends', function (req, res) {
//     var friendName = req.params.friends;
    
//     for (var i = 0; i < friendName.length; i++) {
//         if (friendName === friendName[i].routeName) {
//             return res.json(friends[i]);
//         }
//     }
//     return res.json(false);
// });