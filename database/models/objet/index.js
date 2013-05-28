var mongoose = require("mongoose");
var extend   = require('mongoose-schema-extend');
module.exports = function(mongoose)
{
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var ImageObjet = new Schema({
		_creator : { type: ObjectId, ref: 'User' },
		_collage : { type: ObjectId, ref: 'Collage' },
		createdTime : { type:Date, default: Date.now }
	});
	ImageObjet = mongoose.model("ImageObjet",ImageObjet);
	
}

