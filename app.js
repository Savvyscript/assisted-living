var pry = require('pryjs');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
require('dotenv').config()
// var db = require('./db');
var usersRoute = require('./routes/users');
var sessionsRoute = require('./routes/sessions');
var facilitiesRoute = require('./routes/facilities');

// mongoose.connect('mongodb://localhost/project-2');
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("⚡⚡  Mongoose has connected to MongoDB! ⚡⚡");
});

var index = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: "derpderpderpcats",
  resave: true,
  saveUninitialized: false
}));

var usersRoute = require('./routes/users');
var sessionsRoute = require('./routes/sessions');
var facilitiesRoute = require('./routes/facilities');

app.use('/', index);
app.use('/users', usersRoute);
app.use('/sessions', sessionsRoute);
app.use('/users/:userId/facilities', facilitiesRoute);
app.use('/facilities', facilitiesRoute);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// app.listen(3000);
