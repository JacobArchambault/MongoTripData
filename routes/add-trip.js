const express = require('express');
const router = express.Router();
var Trip = require('../models/trips');


router.get('/', function (req, res, next) {
  res.render('add-trip');
});

router.post('/', function (req, res) {
  var newItem = new Trip({
    date: req.body.date,
    city: req.body.city,
    miles: req.body.miles,
    gallons: req.body.gallons
  });

  newItem.save(function (err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send("Car successfully added.");
    }
  });
});

module.exports = router;
