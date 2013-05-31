var mongoose = require("mongoose");

module.exports = function(io,socket){
	var ImageObjet = mongoose.models.ImageObjet;
	
	socket.on('ImageObjet.create',function(data){
		data._collage = socket.collage;

		var imageObjet = new ImageObjet(data);
		socket.broadcast.to(socket.collage).emit('ImageObjet.create', imageObjet.toJSON() );
		socket.emit('ImageObjet.create', imageObjet.toJSON());
		
		imageObjet.save(function(err,objet){});
	});
	
	socket.on('ImageObjet.update',function(data){
		data._collage = socket.collage;
		
		var imageObjet = new ImageObjet(data);
		socket.broadcast.to(socket.collage).emit('ImageObjet.update', imageObjet.toJSON() );
		socket.emit('ImageObjet.update', imageObjet.toJSON());
		
		delete data._id;
		ImageObjet.update({ _id: imageObjet._id }, data , function (err, numberAffected, raw) {
			if (err) console.log(err);
		});
	});
	
};
