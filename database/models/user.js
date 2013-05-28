var mongoose = require("mongoose");
module.exports = function(){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var User = new Schema({
	    name 	 : String,
		password : String,
		email 	 : String
	});

	User.methods.getCreateCollages = function(cb){
		return this.model("Collage").find({
			_creator : this._id
		},cb);
	};
	
	User = mongoose.model('User', User);
	return User;
}

