var express = require('express');
var router = express.Router();
var Trip = require('../models/trips');

/* GET home page. */
router.get('/', function(req, res, next) {
    Trip.find(function(err, trip) {
      res.render('index', { trips: trip.miles-per-gallon });
  });
});
module.exports = router;