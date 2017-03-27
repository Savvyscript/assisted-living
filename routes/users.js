var express = require('express');
var router = express.Router();

var Users = require('../models/users');

// index users
router.get('/', function(req, res) {
    res.send('users will be here');
});

module.exports = router;