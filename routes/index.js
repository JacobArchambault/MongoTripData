var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add-trip', function(req, res, next) {
  res.render('add-trip');
});

module.exports = router;
