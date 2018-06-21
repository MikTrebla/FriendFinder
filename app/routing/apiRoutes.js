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

    console.log(parseInt(userScore));
    for (var i = 0; i < data.length; i++) {
        let matchThreshold = 40;
        let difference = 0;
        console.log('data score: ' + data[i].score);
        for (var j = 0; j < userScore.length; j++) {
            console.log(difference += Math.abs(parseInt(userScore[j]) - parseInt(data[i].score[j])));
            console.log('userScore: ' + userScore)
            if (matchThreshold > difference) {

            }
        };
    };
});





// router.get('/friends/:friends', function (req, res) {
//     var friendName = req.params.friends;

//     for (var i = 0; i < data.length; i++) {
//         if (friendName === data[i].routeName) {
//             return res.json(data[i]);
//         }
//     }
//     return res.json(false);
// });