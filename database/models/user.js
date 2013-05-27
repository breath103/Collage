var mongoose = require("mongoose");
module.exports = function(){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var User = new Schema({
	    name 	 : String,
		password : String,
		email 	 : String
	});
	// 
	// //instance methods
	// User.methods = {
	// 	getTickets : function (cb) {
	// 		return this.model("Ticket").find({
	// 			_user : this._id,
	// 		},cb);
	//  	},
	// 	getCreateCollages : function(cb){
	// 		return this.model("Collage").find({
	// 			_creator : this._id
	// 		},cb);
	// 	}
	// }
	// 
	// //static methods
	// User.statics.findByName = function (name, cb) {
	// 	this.find({ name: new RegExp(name, 'i') }, cb);
	// }
	
	User = mongoose.model('User', User);
	return User;
}

