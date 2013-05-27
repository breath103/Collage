var mongoose = require("mongoose");
var extend   = require('mongoose-schema-extend');
module.exports = function(mongoose)
{
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var ImageObjet = new Schema({
		_collage : { type: ObjectId, ref: 'Collage' },
	});
	
	var Objet = new mongoose.Schema({
			
	});
	
	require("image_objet")(mongoose);
}

