var mongoose = require('mongoose');

module.exports = function(mongoose)
{
	var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;
	var ObjetSchema = new Schema({
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
		rotation : { type : Number,default : 0 },
		createdTime : { type: Date, default: Date.now }
	});

	require("./image_objet")(mongoose,ObjetSchema);
	require("./link_objet")(mongoose,ObjetSchema);
}


