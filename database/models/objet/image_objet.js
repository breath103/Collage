module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var ImageObjet = new Schema({
		_collage : { type: ObjectId, ref: 'Collage' },
	});

	ImageObjet = mongoose.model('ImageObjet', ImageObjet);
	return ImageObjet;
}

