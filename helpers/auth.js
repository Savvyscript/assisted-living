var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.js');
var bodyParser = require(' body-parser');
var passport = require('passport');

app.use( bodyParser.urlencoded({ extended: true}) );

function createSecure(req, res, next) {
  var password = req.body.password

  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next()
}

function loginUser(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({email: email})
    .exec(function(err, user) {
      if (err) {console.log(err);}
      if (user == null) {
      res.json({status: 401, data: "unauthorized"})
      } else if (bcrypt.compareSync(password, user.password_digest)) {
        req.session.currentUser = foundUser;
      }
          next();
    });
  
}

function authorize(req, res, next) {
  var currentUser = req.session.currentUser;

  if (!currentUser || currentUser._id !== req.params.id ) {
    res.json({status: 401, data: 'unauthorized'});
  } else {
    next();
  }
};

module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorize: authorize
}