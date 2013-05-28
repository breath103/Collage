var mongoose = require("mongoose");
var should   = require("should");

describe("database",function(){
	before(function(done){
		var database = require("../database")(function(){
			done();
		});	
	});
	describe("models",function(){
		describe("Ticket",function(){
			var Ticket = null;
			beforeEach(function(){
				Ticket = mongoose.models.Ticket;
			});
			it("should be exist",function(){
				Ticket.should.be.a("function");
			});
		});
		describe("User",function(){
			var User = null;
			beforeEach(function(){
				User = mongoose.models.User;
			});
			it("should be exist",function(){
				User.should.be.a('function');
			});
		});
		describe("Collage",function(){
			var Collage = null;
			beforeEach(function(){
				Collage = mongoose.models.Collage;
			});
			it("should be exist",function(){
				Collage.should.be.a('function');
			});
		});
		describe("Objets",function(){
			var ImageObjet = null;
			beforeEach(function(){
				ImageObjet = mongoose.models.ImageObjet;
			});
			it("should be exist",function(){
				ImageObjet.should.be.a('function');
			});
			
		});
	});
});