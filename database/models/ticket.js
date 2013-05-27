var mongoose = require("mongoose");
module.exports = function(){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var Ticket = new Schema({
	    _user 	 : { type: Schema.Types.ObjectId, ref: 'User' 	  },
		_collage : { type: Schema.Types.ObjectId, ref: 'Collage'  }
	});

	Ticket = mongoose.model('Ticket', Ticket);
	return Ticket;
}

