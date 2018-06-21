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
    let newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    data.push(newFriend);
    res.json(newFriend);

    let userScore = newFriend.score;
    // console.log(data[0].score);
    // for (var i = 0; i < userScore.length; i++) {
    //     console.log(parseInt(userScore[i]));
    // }
    // console.log(parseInt(userScore));
    for (var i = 0; i < data.length; i++) {
        let compareDifference = 40;
        let difference = 0;
        
        for (var j = 0; j < userScore.length; j++) {
            difference += Math.abs(parseInt(userScore[j]) - parseInt(data[i].score));
            console.log(difference);
            if (compareDifference > difference) {
                
            }
        }
    }
});





router.get('/friends/:friends', function (req, res) {
    var friendName = req.params.friends;

    for (var i = 0; i < data.length; i++) {
        if (friendName === data[i].routeName) {
            return res.json(data[i]);
        }
    }
    return res.json(false);
});