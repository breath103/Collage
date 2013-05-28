module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;
	var Collage = new Schema({
		_creator : { type: ObjectId, ref: 'User' },
		name	 : String
	});
	Collage = mongoose.model('Collage', Collage);
	return Collage;
}

