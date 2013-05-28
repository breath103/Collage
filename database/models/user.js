module.exports = function(mongoose){
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
			this.models["Collage"].find({_creator: this._id},function(err,collages){
				if(err) cb(err,null);
				else {
					self.collages = collages;
					cb(null,self);
				}
			});
		}
	};

	User = mongoose.model('User', User);
	
	var me = new User();
	console.log(me.prototype);
	me.prepareForHome();
	
	
	// var me = new User({ name: 'breath103' });
	// 
	// me.save(function (err) {
	// 	if (err) console.log(err);
	// 
	// 	var collage = new mongoose.models.Collage({
	// 		name : "new Collage",
	// 		_creator : me._id
	// 	});
	// 	
	// 	collage.save(function (err) {
	// 		if (err) console.log(err);
	// 		console.log(collage);
	// 	});
	// });
	return User;
}

