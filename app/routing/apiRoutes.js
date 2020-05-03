var tableData = require("../data/friends.js");

module.exports = function(app) {

app.get('/api/friends', function(req, res) {
    res.json(userData);
});
app.post('/api/friends', function (req, res) {
    var diff = 40;
    var matchName = '';
    var matchPhoto = '';
    tableData.forEach(function (userData) {
        var matchScoreArr = [];
        var totalDiff = 40;
        function add(total, num) {
            return total + num;
        }
        for (var i = 0; i < userData.scores.length; i++) {
            matchScoreArr.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(userData.scores[i])));
        }
        totalDiff = matchScoreArr.reduce(add, 0);
        if (totalDiff < diff) {
            diff = totalDiff;
            matchName = userData.name;
            matchPhoto = userData.photo;
        }
    });
    res.json({
        name: matchName,
        photo: matchPhoto
    });
    tableData.push(req.body);
});
}