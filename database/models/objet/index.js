var mongoose = require("mongoose");
var extend   = require('mongoose-schema-extend');
module.exports = function(mongoose)
{
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var ImageObjet = new Schema({
		_creator : { type: ObjectId, ref: 'User' },
		_collage : { type: ObjectId, ref: 'Collage' },
		size : {
			width  : {type : Number},
			height : {type : Number}
		},
		position : {
			x : {type : Number},
			y : {type : Number}
		},
		createdTime : { type: Date, default: Date.now },
		image : { type: String }
	});

	ImageObjet = mongoose.model("ImageObjet",ImageObjet);
	return ImageObjet;
}


