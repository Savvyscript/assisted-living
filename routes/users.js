var express = require('express');
var router = express.Router();

var Users = require('../models/user');

// index users
router.get('/', function(req, res) {
    Users.find({})
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
    var user = new Users({
        first_name: req.body.first_name,
	    last_name: req.body.last_name,
	    email: req.body.email,
	    username: req.body.username,
	    password: req.body.password,
    });
    user.save(function(err){
        if (err) { console.log(err); }

        // console.log(users);
        res.render('users/show', {
            users: user
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
    User.findById(req.params.id)
    .exec(function(err, users) {
        if (err) { console.log(err); }

        res.render('users/edit', {
            users: users
        });
    });
});

// update users
router.patch('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
	    last_name: req.body.last_name,
	    email: req.body.email,
	    username: req.body.username,
	    password: req.body.password,
    }, {new: true})
        .exec(function(err, users) {
            if (err) { console.log(err); }

            console.log(users);
            res.render('users/show', {
                users: users
            });
        });
});

// delete users
router.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id)
        .exec(function(err, users) {
            if (err) { console.log(err); }

            console.log('User deleted.');
            // res.send('User deleted.');
            // redirect back to the index route
            res.redirect('/users'); 
        });
});

module.exports = router;
