module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var User = new Schema({
	    name 	 : String,
		password : String,
		email 	 : String
	});

	User = mongoose.model('User', User);
	
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

