require('dotenv').config()

var express = require('express');
//var path = require('path');
//var parser = require('body-parser');
//var cors = require('cors');

//var user = require('./api/routes/user');
//var notebook = require('./api/routes/notebook');

var app = express();

//app.use(cors());
//app.use(parser.json());

//app.use('/', user);
//app.use('/notebook', notebook);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message);
});

app.listen(1337, function () {
  console.log('Started app on :80')
})