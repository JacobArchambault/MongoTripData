const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');
const hbs = require('hbs');
hbs.registerHelper('select', function (selected, option) {
  return (selected == option) ? 'selected="selected"' : '';
});


router.get('/', (req, res, next) => Trip.findOne({ _id: req.query._id }, (err, trip) => res.render('edit-trip', { trips: trip })));

router.post('/', function (req, res) {
  Trip.findOneAndUpdate({
    _id : req.query._id
  },
    {
      $set: {
        city: 'Nashville',
        miles: 1000,
        gallons: 2
      }
    }, { upsert: false }, function (err, doc) { res.redirect("/"); })
});

module.exports = router;