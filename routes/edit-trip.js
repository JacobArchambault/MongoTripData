const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');


router.get('/', function (req, res, next) {
  res.render('edit-trip');
});

router.post('/', function (req, res) {
  new Trip({
    date: req.body.date,
    city: req.body.city,
    miles: req.body.miles,
    gallons: req.body.gallons
  }).save(() => res.redirect("/"));
});

module.exports = router;
