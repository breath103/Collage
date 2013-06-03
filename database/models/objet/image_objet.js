var mongoose = require("mongoose");
var extend   = require('mongoose-schema-extend');
module.exports = function(mongoose,objetSchema)
{
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var ImageObjet = objetSchema.extend({
		image : { type: String }
	});
	
	ImageObjet = mongoose.model("ImageObjet",ImageObjet);
	return ImageObjet;
}


