var express = require('express');
var mongoose = require('mongoose');
var ticketRouter = require('./routes/ticketRouter.js');
var bodyParser = require('body-parser');
var app = express();

//[[[[[[[[[[[[[[[[[[[[[ROUTERS]]]]]]]]]]]]]]]]]]]]]
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/', ticketRouter);

//[[[[[[[[[[[[[[[[[DATABASE]]]]]]]]]]]]]]]]]
 var mongoUri = 'mongodb://localhost/ticketmanager';
 var mongoDB = mongoose.connect(mongoUri).connection;
 mongoDB.on('error', function(err){
  console.log('MongoDB connection error', err);
});
mongoDB.once('open', function(){
  console.log('MongoDB connection open.');
});



//[[[[[[[[[[[[[[[[[SERVER]]]]]]]]]]]]]]]]]
var server = app.listen(3000,function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
