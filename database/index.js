var mongoose = require("mongoose");


module.exports = function(callback){
	mongoose.connect("mongodb://localhost/Collage");

	require("./models")(mongoose);

	callback(mongoose);
}
