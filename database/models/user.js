var mongoose = require("mongoose");
module.exports = function(){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var User = new Schema({
	    name 	 : String,
		password : String,
		email 	 : String
	});

	User.methods = {
		prepareForHome : function(cb){
			var self = this;
			return mongoose.models.Collage.find({_creator: this._id},function(err,collages){
				if(err) cb(err,null);
				else {
					self.collages = collages;
					cb(null,self);
				}
			});
		},
		print : function(){
			return "SDFASDFSDF";
		}
	};

	User = mongoose.model('User', User);
	return User;
}

