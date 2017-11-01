var express = require('express');
var path = require('path');

var routes = require('./api/routes/index');

var app = express();

app.use('/', routes);

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
