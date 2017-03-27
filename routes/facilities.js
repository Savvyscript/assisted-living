var express = require('express');
var router = express.Router();

var Facility = require('../models/facilities');

// index authors
router.get('/', function(req, res) {
    // res.send('authors will be here');
    facilities.find({})
        .exec(function(err, facilities) {
            if(err) console.log(err);

            console.log(facilities);
            res.send(facilities);
        });
});

module.exports = router;