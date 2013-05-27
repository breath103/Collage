var fs = require("fs");
var mongoose = require("mongoose");

module.exports = function(app){
    console.log("   	--Collages--");
	
	var Collage = mongoose.models.Collage;
	var User    = mongoose.models.User;

	app.get("/collages",function(req,res){
	    Collage.find({},function(err,users){
	        if(err){
	            res.send(401);
	        } else {
				res.json(users,200);
	        }
	    });
	});

	app.get("/collages/:id",function(req,res){
		Collage.findById(req.param("id"),function(err,collage){
	        if(err){
	            res.send(401);
	        } else {
				res.render("collage/view",{collage : collage});
	        }
	    });
	});
	
	app.post("/collages",function(req,res){
		console.log(req.session.user._id);
		var collage = new Collage({
			name 	 : req.param("name"),
			_creator : req.session.user._id
		});
		collage.save(function(err,collage){
			if(err) { console.log(err); }
			else {
				res.redirect("/collages/" + collage._id);
			}
		});
	});
	
    console.log("   	--Collages--");
};
