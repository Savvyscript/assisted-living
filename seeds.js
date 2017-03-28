var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-2');

var Users = require("./models/users");
var Facilities = require("./models/facilities");

mongoose.promise = global.Promise;

Facilities.remove({}, function(err) {
    console.log(err);
});

var facilityOne = new Facilities({
    name: 'Morningside of Alpharetta',
    street: '253 N Main St.',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 410-9169'
     
});

var facilityTwo = new Facilities({
    name: 'Autumn Leaves of Windward',
    street: '3300 Webb Bridge Rd',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 291-6263',
    
});

var facilityThree = new Facilities({
    name: 'Crabapple Hall',
    street: '200 Pine Valley Dr',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 664-9264',
    
});

var facilityFour = new Facilities({
    name: 'Dogwood Square',
    street: '253 N Main St.',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 442-3841',
    
});


facilityOne.save(function(err) {
  if (err) console.log(err);

  console.log('Morningside of Alpharetta is under renovation!');
});

facilityTwo.save(function(err) {
  if (err) console.log(err);

  console.log('Autumn Leaves of Windward is under renovation!');
});

facilityThree.save(function(err) {
  if (err) console.log(err);

  console.log('Crabapple Hall is under renovation!');
});

facilityFour.save(function(err) {
  if (err) console.log(err);

  console.log('Dogwood Square is under renovation!');
});


