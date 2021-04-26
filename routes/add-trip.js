const express = require('express');
const router = express.Router();
var Trip = require('../models/trips');


router.get('/', function (req, res, next) {
  res.render('add-trip');
});

router.post('/', function (req, res) {
  new Trip({
    date: req.body.date,
    city: req.body.city,
    miles: req.body.miles,
    gallons: req.body.gallons
  }).save(function () {
    res.redirect("/");
  });
});

module.exports = router;
