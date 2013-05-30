var _ = require("underscore");
var async = require("async");
module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;
	var Collage = new Schema({
		_creator : { type: ObjectId, ref: 'User' },
		name	 : String
	});
	Collage.methods = {
		getLinkObjets : function(cb){
			return mongoose.models.LinkObjet.find({ _collage: this._id},cb);
		},
		getImageObjets: function(cb){
			return mongoose.models.ImageObjet.find({ _collage: this._id},cb);
		},
		getObjets: function(cb){
			async.parallel([
			    _.bind(this.getLinkObjets,this),
			    _.bind(this.getImageObjets,this)
			], function(err, results){
				var objets = {
					links  : results[0],
					images : results[1]
				};
				cb(err,objets);
			});
		}
	};
	
	Collage = mongoose.model('Collage', Collage);
	
	return Collage;
}

