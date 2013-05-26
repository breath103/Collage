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
	
	app.get("/users/:id",function(req,res){
		User.findById(req.param("id"))
			.exec(function(err,user){
		        Collage.find({_creator : user._id},function(err,collages){
		            if(err){
		                res.send(401);
		            } else {
						console.log(collages);
						user = user.toJSON();
						user.collages = collages;
						res.render("user/index",{user : user});
		            }
		        });
			});
	});

    // require("./admin")(app);
    // require("./auth")(app);
    // require("./users")(app);
    // require("./contents")(app);

    console.log("   --SITES END--");
};