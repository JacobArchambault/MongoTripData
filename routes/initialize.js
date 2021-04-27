/*   utility program to create db and add some documents   */
var express = require('express');
var router = express.Router();

var Trips = require('../models/trips.js');

router.get('/', function (req, res) {
    /* data should be in JSON format */
    Trips.insertMany([
        { "date": "2021-11-01", "city": "Chicago", "miles": 300, "gallons": 40 },
        { "date": "2021-10-04", "city": "Nashville", "miles": 350, "gallons": 100 },
        { "date": "2020-11-02", "city": "Cincinnati", "miles": 400, "gallons": 125 },
        { "date": "2020-09-03", "city": "Indianapolis", "miles": 95, "gallons": 10 },
    ], (err, docs) => {
        if (err) {
            res.send('Error: ' + err);
        }
        else {
            Trips.count({}, (err, count) => {
                console.log('-');
                console.log("Trips added :", count);
                res.send('success');
            })
        }
    });
});

module.exports = router;