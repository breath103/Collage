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
			
			describe("model",function(){
				it("should be exist",function(){
					Collage.should.be.a('function');
				});
			});
		});
		describe("Objets",function(){
			var ImageObjet = null;
			beforeEach(function(){
				ImageObjet = mongoose.models.ImageObjet;
			});
			describe("initializing",function(){
				it("should be exist",function(){
					ImageObjet.should.be.a('function');
				});
			});
			describe("attributes",function(){
				var model = null;
				beforeEach(function(){
					Date.now = function(){
						return new Date(1000);
					};
					model = new ImageObjet({
						size : {
							width : 200,
							height: 150
						},
						position : {
							x : 500,
							y : 1
							
						},
						image : "http://www.naver.com"
					});
				});
				describe("createdTime",function(){
					it("should have createdTime",function(){
						model.createdTime.should.be.an.instanceOf(Date);
					});
					xit("should set as a default value(Date.now)",function(){
						
					});
				});
				describe("position",function(){
					it("should set position",function(){
						model.position.x.should.equal(500);
						model.position.y.should.equal(1);
					});
				});
				describe("size",function(){
					it("should set size",function(){
						model.size.width.should.equal(200);
						model.size.height.should.equal(150);
					});
				});
				describe("image",function(){
					it("should set image",function(){
						model.image.should.equal("http://www.naver.com");
					});
				});
			});
		});
	});
});