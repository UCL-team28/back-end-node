var express = require('express'),
  app = express(),
 // port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Notebook = require('./api/models/notebookModels'), //created model loading here
  bodyParser = require('body-parser'),
  http = require('http');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/notebook', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/notebookRoutes'); //importing route
routes(app); //register the route

//app.use(function (req, res) {
//  res.status(404).send({ url: req.originalUrl + ' not found' })
//});

//app.listen(port, );

http.createServer(app).listen(3000);

console.log('todo list RESTful API server started on: ' + port);
