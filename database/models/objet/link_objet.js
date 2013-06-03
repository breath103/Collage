var mongoose = require("mongoose");
var extend   = require('mongoose-schema-extend');
module.exports = function(mongoose,objetSchema)
{
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var LinkObjet = objetSchema.extend({
		link : { type: String }
	});

	LinkObjet = mongoose.model("LinkObjet",LinkObjet);
	return LinkObjet;
}


