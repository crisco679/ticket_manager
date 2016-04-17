var express = require('express');
var path = require('path');
var model = require('../../models/model.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();



/////////////////////////////////////////////////////////////
//[[[[[[[[[[[[[[[[[[[[[[[[[WALKING SKELETON]]]]]]]]]]]]]]]]]]]]]]]]]
// router.post('/add', function(request, response, next){
//   var kitty = new Cat({name: request.body.name});
//   kitty.save(function(err){
//       if(err) console.log('meow %s', err);
//       response.send(kitty.toJSON());
//       next();
//   });
// });
/////////////////////////////////////////////////////////////

router.post('/store', function(request, response){
  var tickets = new model({
    ticketName: request.body.ticketName,
    ticketType: request.body.ticketType,
    ticketPriority: request.body.ticketPriority,
    ticketDescription: request.body.ticketDescription,
    ticketAssignee: request.body.ticketAssignee,
    ticketReporter: request.body.ticketReporter,
    dateCreated: request.body.dateCreated,
    dateUpdated: request.body.dateUpdated,
  });
  tickets.save(function(err){
    if(err){
      console.log('error', err);
    }
    response.send(tickets.toJSON());

  });
});
router.get('/tickets', function(request, response){
  return model.find({}).exec(function(err,tickets){
    if(err){
      console.log('Error', err);
    }
    response.send(JSON.stringify(tickets));
  })
})
router.get('/', function(request, response){
  console.log('at localhost:3000/');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
