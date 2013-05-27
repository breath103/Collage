var fs = require("fs");
var mongoose = require("mongoose");

module.exports = function(app){
    console.log("   --SITES--");
    
    app.get("/",function(req,res){
		res.render("index");
    });
	
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
	
	
	app.get("/users/:id",function(req,res,next){
		User.findById(req.param("id"),function(err,user){
			user.getCreateCollages(function(err,collages){
				console.log("!!" , collages);
			});
		});
		User.findById(req.param("id"))
			.populate("_create_collages")
			.populate("_invited_collages")
			.exec(function(err,user){
		     	if(err) next(err);
				else res.render("user/index",{user : user});
				console.log(user);
			});
	});
	
	app.get("/users/:id/new_collage",function(req,res,next){
		User.findById(req.param("id")).exec(function(err,user){
			if(err) next(err);
			else {
			    var collage = new Collage({
					name : "new collections 2",
					_creator : user._id 
			    });
			    collage.save(function (err) {
					user._create_collages.push(collage._id);
					user.save();
				});
				res.render("user/index",{user : user});
			}
		});
	});
	

    // require("./admin")(app);
    // require("./auth")(app);
    // require("./users")(app);
    // require("./contents")(app);

    console.log("   --SITES END--");
};