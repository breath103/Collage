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
		}
	};
	
	User.statics.middleware = {
		findByUsername : function(req,res,next){
			User.findOne({name : req.param("name")},function(err,user){
				if(err) { next(err); }
				else {
					req.user = user;
					next();
				}
			});
		}
	};

	User = mongoose.model('User', User);
	return User;
}