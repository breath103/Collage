var mongoose = require("mongoose");

module.exports = function(io,socket){
	var LinkObjet = mongoose.models.LinkObjet;
	
	socket.on('LinkObjet.create',function(data){
		var linkObjet = new LinkObjet(data);
		socket.broadcast.to(socket.collage).emit('LinkObjet.create', linkObjet.toJSON() );
		linkObjet.save(function(err,objet){ });
	});
	
	socket.on('LinkObjet.update',function(data){
		var linkObjet = new LinkObjet(data);
		socket.broadcast.to(socket.collage).emit('LinkObjet.update', linkObjet.toJSON() );
		
		delete data._id;
		LinkObjet.update({ _id: linkObjet._id }, data , function (err, numberAffected, raw) {
			if (err) console.log(err);
		});
	});
};
