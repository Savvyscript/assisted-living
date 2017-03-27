var express = require('express');
var router = express.Router();

var Facilities = require('../models/facilities');

// index facilities
router.get('/', function(req, res) {
    res.send('Facilities will be here');
});

module.exports = router;