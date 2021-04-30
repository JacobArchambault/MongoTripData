const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');
const hbs = require('hbs');
hbs.registerHelper('select', function (selected, option) {
  return (selected == option) ? 'selected="selected"' : '';
});


router.get('/', (req, res, next) => Trip.findOne({ _id: req.query._id }, (err, trip) => res.render('edit-trip', { trips: trip })));

router.post('/', (req, res) =>
  Trip.findOneAndUpdate({
    _id: req.query._id
  },
    {
      $set: {
        city: req.body.city,
        miles: req.body.miles,
        gallons: req.body.gallons
      }
    }, { upsert: false }, (err, doc) => res.redirect("/")));

module.exports = router;