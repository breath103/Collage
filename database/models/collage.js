module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;
	var Collage = new Schema({
		_creator : { type: ObjectId, ref: 'User' },
		name	 : String
	});
	Collage.methods = {
		getObjets: function(cb){
			return mongoose.models["ImageObjet"].find({ _collage: this._id},cb);
			// 	  		var promise = new mongoose.Promise;
			// if (cb) promise.addBack(cb);
			// mongoose.models["ImageObjet"].find( { _collage : this._id} ,
			// 								promise.resolve.bind(promise));
			// 	  	  	return promise;
		}
	};
	
	Collage = mongoose.model('Collage', Collage);
	
	return Collage;
}

