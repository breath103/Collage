var fs = require("fs");
var mongoose = require("mongoose");

module.exports = function(app){
    console.log("   --SITES--");
    
    app.get("/",function(req,res){
        if (req.session.user) {
			var user = req.session.user;
			mongoose.models["Collage"].find({_creator : user._id},function(err,collages){
	            if(err){
	                res.send(401);
	            } else {
					console.log(collages);
					user.collages = collages;
					res.render("home",{
						user : user
					});
			    }
	        });
		} else {
			res.render("index");
		}
    });

    require("./user")(app);
    require("./collage")(app);

    console.log("   --SITES END--");
};