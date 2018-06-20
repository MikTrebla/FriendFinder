let express = require("express");
let path = require("path");
let app = express();
let router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../public/home.html'));
});

router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});


module.exports = router;