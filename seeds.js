var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

var User = require('./models/user');
var Facilities = require('./models/facility');


mongoose.Promise = global.Promise;


User.remove({}, function(err){
  console.log(err);
});



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
  email: 'mevans@gmail.com'
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



var users = [gary, mark, kevin, mary, cece];
var facilities = [facilities1, facilities2, facilities3, facilities4];


users.forEach(function(user, i){
  user.facilities.push(facilities[i]);

  user.save(function(err) {
    if(err) { console.log(err); }

    console.log(user);
  });
});




