var express = require('express');
var router = express.Router();
var Trip = require('../models/trips');

/* GET home page. */
router.get('/', (req, res, next) => Trip.find((err, trip) => res.render('index', { trips: trip })));
module.exports = router;