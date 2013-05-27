var fs = require("fs");
var mongoose = require("mongoose");

module.exports = function(app){
    console.log("   	--USERS--");

	var User 	= mongoose.models.User;
	var Collage = mongoose.models.Collage;

	app.get("/auth/login",function(req,res){
		User.findOne({
			email 	 : req.param("email"),
			password : req.param("password")
		},function(err,user){
			if(err || !user) {
				req.session.user = null;
			} else {
				console.log("login : ",user);
				req.session.user = user;
			}
			res.redirect("/");
		});
	});
	
	app.post("/users",function(req,res){
		var user = new User({
			name  	 : req.param("name"),
			email 	 : req.param("email"),
			password : req.param("password")
		});
		user.save(function(err,user){
			if(err) res.json(400,JSON.stringify(err));
			else {
				req.session.user = user;
				res.redirect("/");
			}
		});
	});
	
	app.get("/users/:name",function(req,res){
		User.findOne({name : req.param("name")})
			.exec(function(err,user){
				if (err || !user ){
					res.send(400);
				} else {
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
				}
			});
	});
	
    console.log("   	--USERS--");
};