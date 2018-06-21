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

    let userScore = newFriend.score;

    let diffArr = [];
    for (let i = 0; i < data.length - 1; i++) {
        let difference = 0;
        for (let j = 0; j < userScore.length; j++) {
            difference += Math.abs(userScore[j] - data[i].score[j]);
        };
        diffArr.push(difference)
        console.log(diffArr);
    };

    let lowestScore = diffArr[0];
    for (i = 0; i < diffArr.length; i++) {
        if (diffArr[i] < lowestScore) {
            lowestScore = diffArr[i];
        };
    };

    var match = diffArr.indexOf(lowestScore);
    var matchName = data[match].name;
    var photo = data[match].photo;


    var matchInfo = {
        result: '<h1>' + matchName + '</h1>' + '<br><img src ="' + photo + '">'
    }
    res.send(matchInfo.result);
});





router.get('/friends/:friends', function (req, res) {
    var friendName = req.params.friends;

    for (var i = 0; i < data.length; i++) {
        if (friendName === data[i].routeName) {
            return res.json(data[i]);
        }
    }
    return res.json('Not Found!');
});