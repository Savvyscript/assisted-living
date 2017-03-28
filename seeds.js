var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

var User = require('./models/user');
var Facilities = require('./models/facility');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
User.remove({}, function(err){
  console.log(err);
});


// create new users
var gary = new User({
  first_name: 'Gary',
  last_name: "Jones",
  username: "username",
  password: "foobar",
  email: 'gary@gmail.com'
});

var mark = new User({
  first_name: 'Mark',
  last_name: "Evans",
  username: "username",
  password: "foobar",
  email: 'marc@gmail.com'
});

var kevin = new User({
  first_name: 'Kevin',
  last_name: "Jones",
  username: "username",
  password: "foobar",
  email: 'kevin@gmail.com'
});

var mary = new User({
  first_name: 'Mary',
  last_name: "Mack",
  username: "username",
  password: "foobar",
  email: 'mmack@gmail.com'
});

var cece = new User({ 
  first_name: 'Cece',
  last_name: "Penn",
  username: "username",
  password: "foobar",
  email: 'cpenn@gmail.com'
});

Facilities.remove({}, function(err) {
    console.log(err);
});

var facilities1 = new Facilities({
    name: 'Morningside of Alpharetta',
    street: '253 N Main St.',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 410-9169'

});

var facilities2 = new Facilities({
    name: 'Autumn Leaves of Windward',
    street: '3300 Webb Bridge Rd',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 291-6263',

});

var facilities3 = new Facilities({
    name: 'Crabapple Hall',
    street: '200 Pine Valley Dr',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 664-9264',

});

var facilities4 = new Facilities({
    name: 'Dogwood Square',
    street: '253 N Main St.',
    city: 'Alpharetta',
    state: 'GA',
    contact: '(770) 442-3841',

});


// create two arrays that we can iterate over
var users = [gary, mark, kevin, mary, cece];
var facilities = [facilities1, facilities2, facilities3, facilities4];


users.forEach(function(user, i){
  user.facilities.push(facilities[i]);

  user.save(function(err) {
    if(err) { console.log(err); }

    console.log(user);
  });
});







// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/project-2');


// var User = require("./models/user");
// var Facilities = require("./models/facilities");


// mongoose.promise = global.Promise;

// Facilities.remove({}, function(err) {
//     console.log(err);
// });

// var facilityOne = new Facilities({
//     name: 'Morningside of Alpharetta',
//     street: '253 N Main St.',
//     city: 'Alpharetta',
//     state: 'GA',
//     contact: '(770) 410-9169'
     
// });

// var facilityTwo = new Facilities({
//     name: 'Autumn Leaves of Windward',
//     street: '3300 Webb Bridge Rd',
//     city: 'Alpharetta',
//     state: 'GA',
//     contact: '(770) 291-6263',
    
// });

// var facilityThree = new Facilities({
//     name: 'Crabapple Hall',
//     street: '200 Pine Valley Dr',
//     city: 'Alpharetta',
//     state: 'GA',
//     contact: '(770) 664-9264',
    
// });

// var facilityFour = new Facilities({
//     name: 'Dogwood Square',
//     street: '253 N Main St.',
//     city: 'Alpharetta',
//     state: 'GA',
//     contact: '(770) 442-3841',
    
// });


// facilityOne.save(function(err) {
//   if (err) console.log(err);

//   console.log('Morningside of Alpharetta is under renovation!');
// });

// facilityTwo.save(function(err) {
//   if (err) console.log(err);

//   console.log('Autumn Leaves of Windward is under renovation!');
// });

// facilityThree.save(function(err) {
//   if (err) console.log(err);

//   console.log('Crabapple Hall is under renovation!');
// });

// facilityFour.save(function(err) {
//   if (err) console.log(err);

//   console.log('Dogwood Square is under renovation!');
// });


