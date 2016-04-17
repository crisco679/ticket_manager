var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var aTicket = new Schema ({
  ticketName: String,
  ticketType: String,
  ticketPriority: String,
  ticketDescription: String,
  ticketAssignee: String,
  ticketReporter: String,
  dateCreated: {
           type: Date,
           default: new Date()
       },
  dateUpdated: {
          type: Date,
          default: new Date()
  },
});

var Ticket = mongoose.model('ticket', aTicket);

module.exports = Ticket;
