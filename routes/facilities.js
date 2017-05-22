var express = require('express');
var router = express.Router();

var Facilities = require('../models/facility');

// index facilities
// router.get('/', function(req, res) {
//     // res.send('facilities will be here');
//     Facilities.find({})
//         .exec(function(err, facilities) {
//             if(err) console.log(err);

//             // console.log(facilities);
//             res.send(facilities);
//         });
// });

router.get('/', function(req, res) {
	res.render('/index');        
});

module.exports = router;
