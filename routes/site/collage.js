var fs = require("fs");
var mongoose = require("mongoose");

module.exports = function(app){
	var Collage = mongoose.models.Collage;
	var User    = mongoose.models.User;

	app.get("/collages",function(req,res,next){
	    Collage.find({},function(err,users){
	        if(err) next(err);
			else res.json(users,200);
	    });
	});
	
	app.get("/collages/:id",Collage.middleware.findById,function(req,res){
		var collage = req.collage;
		collage.getObjets(function(err,objets){
			var c = collage.toJSON();
			c.objets = objets;
			res.render("collage/view",{
				collage : c
			});
		});
	});
	
	app.post("/collages",function(req,res){
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
};
