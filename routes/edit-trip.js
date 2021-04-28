const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');


router.get('/', (req, res, next) => Trip.findOne({_id: req.query._id}, (err, trip) => res.render('edit-trip', { trips: trip })));

router.post('/', (req, res) =>
  new Trip({
    date: req.body.date,
    city: req.body.city,
    miles: req.body.miles,
    gallons: req.body.gallons
  }).save(() => res.redirect("/")));

module.exports = router;
