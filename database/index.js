var mongoose = require("mongoose");


module.exports = function(callback){
	mongoose.connect("mongodb://localhost/Collage");
	mongoose.set('debug', true);
		
	require("./models")(mongoose);

	callback(mongoose);
}
