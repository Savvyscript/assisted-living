var express = require('express');
var router = express.Router();

var Users = require('../models/users');

// index authors
router.get('/', function(req, res) {
    
    User.find({})
        .exec(function(err, users) {
            if(err) console.log(err);

            console.log(users);
            res.render('users/index', {
                  users: users
            });
        });
});

// new user
router.get('/new', function(req, res) {
    res.render('users/new');
});

// create users
router.post('/', function(req, res) {
    var user = new User({
        first_name: req.body.first_name,
	    last_name: req.body.last_name,
	    email: req.body.email,
	    username: req.body.username,
	    password: req.body.password,
    });
    user.save(function(err, user){
        if (err) { console.log(err); }

        console.log(users);
        res.render('users/show', {
            users: users
        });
    });
});

// show users
router.get('/:id', function(req, res) {
    users.findById(req.params.id)
        .exec(function(err, users) {
            if(err) console.log(err);

            console.log(users);
            // res.send(users);
            res.render('users/show', {
                users: users
            });
        });
});

// edit users
router.get('/:id/edit', function(req,res) {
    Users.findById(req.params.id)
    .exec(function(err, users) {
        if (err) { console.log(err); }

        res.render('users/edit', {
            users: users
        });
    });
});

// update users
router.patch('/:id', function(req, res) {
    Users.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
	    last_name: req.body.last_name,
	    email: req.body.email,
	    username: req.body.username,
	    password: req.body.password,
    }, {new: true})
        .exec(function(err, users) {
            if (err) { console.log(err); }

            console.log(author);
            res.render('users/show', {
                users: users
            });
        });
});

module.exports = router;
