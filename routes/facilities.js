var express = require('express');
var router = express.Router();

var Facilities = require('../models/facility');



router.get('/', function(req, res) {
	res.render('facilities/new');        
});




outer.get('/new', function(req, res) {
    res.render('facilities/new');
});


router.post('/', function(req, res) {
    var facility = new facilities({
        first_name: req.body.first_name,
	    last_name: req.body.last_name,
	    email: req.body.email,
	    username: req.body.username,
	    password: req.body.password,
    });
    facility.save(function(err){
        if (err) { console.log(err); }

       
        res.render('facilities/show', {
            facilities: facility
        });
    });
});


router.get('/:id', function(req, res) {
    facilities.findById(req.params.id)
        .exec(function(err, facilities) {
            if(err) console.log(err);

            console.log(facilities);
            
            res.render('facilities/show', {
                facilities: facilities
            });
        });
});


router.get('/:id/edit', function(req,res) {
    Facility.findById(req.params.id)
    .exec(function(err, facilities) {
        if (err) { console.log(err); }

        res.render('facilities/edit', {
            facilities: facilities
        });
    });
});


router.patch('/:id', function(req, res) {
    Facility.findByIdAndUpdate(req.params.id, {
        location_name: req.body.location_name,
	    email: req.body.email,
	    username: req.body.username,
	    password: req.body.password,
    }, {new: true})
        .exec(function(err, facilities) {
            if (err) { console.log(err); }

            console.log(facilities);
            res.render('facilities/show', {
                facilities: facilities
            });
        });
});

router.delete('/:id', function(req, res) {
    Facility.findByIdAndRemove(req.params.id)
        .exec(function(err, facilities) {
            if (err) { console.log(err); }

            console.log('User deleted.');
            
            res.redirect('/facilities'); 
        });
});



module.exports = router;



