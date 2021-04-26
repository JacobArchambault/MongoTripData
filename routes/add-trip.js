var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('add-trip');
});

router.post('/', function(req, res){
  return res.redirect('/');
});

module.exports = router;
