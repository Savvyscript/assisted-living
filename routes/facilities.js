var express = require('express');
var router = express.Router();

var Facilities = require('../models/facility');



router.get('/', function(req, res) {
	res.render('facilities/new');        
});

module.exports = router;
