var fs = require("fs");
var mongoose = require("mongoose");

module.exports = function(app){
    console.log("   --SITES--");
    
    app.get("/",function(req,res){
        if (req.session.user) {
			res.render("home",{
				user : req.session.user
			});
		} else {
			res.render("index");
		}
    });

    require("./user")(app);
    require("./collage")(app);

    console.log("   --SITES END--");
};