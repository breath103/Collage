var socketIO = require("socket.io");
var Step     = require("step");
var util     = require("util");
var fs       = require('fs');
var path     = require("path");

var mongoose = require("mongoose");

module.exports = function(server){
    console.log("	--webSocket--");
	var io = socketIO.listen(server);

	io.on('connection', function (socket) {
		socket.on("joinRoom",function(data){
			socket.join(data.collage);
			socket.collage = data.collage;
		});
		socket.on('message', function (data) {
			
        });
        socket.on('disconnect', function () {
        
		});
		
		var ImageObjet = mongoose.models["ImageObjet"];
		socket.on('imageObjet.create',function(data){
			var imageObjet = new ImageObjet({
				_collage : socket.collage,
				image : data.image
			});
			imageObjet.save(function(err,objet){ });
			
			socket.broadcast.to(socket.collage).emit('imageObjet.create', imageObjet.toJSON() );
		});
    });
}