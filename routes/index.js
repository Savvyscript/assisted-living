var express = require('express');
var router = express.Router();

var User = require('../models/users');

// index users
router.get('/', function(req, res) {
    // res.send('users will be here');
    User.find({})
        .exec(function(err, users) {
            if(err) console.log(err);

            console.log(users);
            // res.send(users);
            res.render('users/index', {
            	  users: users
            });
        });
});

module.exports = router;



