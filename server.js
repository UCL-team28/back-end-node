var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Notebook = require('./api/models/notebookModels'), //created model loading here
bodyParser = require('body-parser'),
http = require('http');

const CONNECTION_STRING = 'mongodb://zczlozh:ixZlQLngM4GnO4b4hVSV6c29yjuNP1PEyrnmiCNgxWtaZfdoYUAzv0gcuT5WW2enJO8C6Yq5RCPWce0pOuHT5g==@zczlozh.documents.azure.com:10255/?ssl=true'

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_STRING, {useMongoClient: true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/notebookRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

//app.listen(port, );

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
