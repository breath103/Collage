var mongoose = require("mongoose");
var extend   = require('mongoose-schema-extend');
module.exports = function(mongoose)
{
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var LinkObjet = new Schema({
		_creator : { type: ObjectId, ref: 'User' },
		_collage : { type: ObjectId, ref: 'Collage' },
		size : {
			width  : {type : Number, default: 0},
			height : {type : Number, default: 0}
		},
		position : {
			x : {type : Number, default: 0},
			y : {type : Number, default: 0}
		},
		rotation : { type : Number, default: 0 },
		createdTime : { type: Date, default: Date.now },
		link : { type: String }
	});
	
	LinkObjet = mongoose.model("LinkObjet",LinkObjet);
	return LinkObjet;
}


