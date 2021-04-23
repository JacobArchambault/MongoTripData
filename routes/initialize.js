/*   utility program to create db and add some documents   */
var express = require('express');
var router = express.Router();

var Trips = require('../models/trips.js');

router.get('/', function (req, res) {
    /* data should be in JSON format */
    var allTrips = [
        { "date": "11/1/2021", "city": "Chicago", "miles": 300, "gallons": 40 },
        { "date": "10/4/2021", "city": "Nashville", "miles": 350, "gallons": 100 },
        { "date": "11/2/2020", "city": "Cincinnati", "miles": 400, "gallons": 125 },
        { "date": "9/3/2020", "city": "Indianapolis", "miles": 95, "gallons": 10 },
    ]
    Trips.insertMany(allTrips, function (err, docs) {
        if (err) {
            res.send('Error: ' + err);
        }
        else {
            Trips.count({}, function (err, count) {
                console.log('-');
                console.log("Trips added :", count);
                res.send('success');
            })
        }
    });
});

module.exports = router;