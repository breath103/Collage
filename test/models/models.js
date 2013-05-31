var mongoose = require("mongoose");
var should   = require("should");


var shouldBehaveLikeObjet = require("./shared_objet.js");


describe("database",function(){
	before(function(done){
		var database = require("../../database")(function(){
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
			
			describe("attributes",function(){
				this.model = null;
				beforeEach(function(){
					this.model = new User({
						name : "breath103",
						password : "1994Kurt",
						email : "breath103@gmail.com"
					});
				});
				describe("name",function(){
					it("should set name",function(){
						this.model.name.should.equal("breath103");
					});
				});
				describe("password",function(){
					it("should set password",function(){
						this.model.password.should.equal("1994Kurt");
					});
				});
				describe("email",function(){
					it("should set email",function(){
						this.model.email.should.equal("breath103@gmail.com");
					});
				});
			});
		});
		describe("Collage",function(){
			this.Collage = null;
			this.model = null;
			
			beforeEach(function(){
				this.Collage = mongoose.models.Collage;
				this.model = new this.Collage({
					name : "breath103"
				});
			});
			
			describe("model",function(){
				it("should be exist",function(){
					this.Collage.should.be.a('function');
				});
			});
			
			describe("attributes",function(){
				describe("name",function(){
					it("should set name",function(){
						this.model.name.should.equal("breath103");
					});
				});
			});
			
			xdescribe("methods",function(){
				describe("getLinkObjets",function(){
					it("should return all linkObjets that belong to this collage",function(){
						
					});
				});
				describe("getImageObjets",function(){
					it("should return all imageObjets that belong to this collage",function(){
						
					});
				});
				describe("getObjets",function(){
					it("should return all Objets that belong to this collage",function(){
						
					});
				});
			});
		});
				
		describe("LinkObjet",function(){
			var LinkObjet = null;
			beforeEach(function(){
				LinkObjet = mongoose.models.LinkObjet;
			});
			describe("initializing",function(){
				it("should be exist",function(){
					LinkObjet.should.be.a('function');
				});
			});
			describe("attributes",function(){
				this.model = null;
				beforeEach(function(){
					Date.now = function(){
						return new Date(1000);
					};
					this.model = new LinkObjet({
						size : {
							width : 200,
							height: 150
						},
						position : {
							x : 500,
							y : 1
						},
						rotation : 32.6,
						link : "http://www.naver.com"
					});
				});
				
				shouldBehaveLikeObjet();
				
				describe("link",function(){
					it("should set link",function(){
						this.model.link.should.equal("http://www.naver.com");
					});
				});
			});
		});
		describe("ImageObjet",function(){
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
				this.model = null;
				beforeEach(function(){
					Date.now = function(){
						return new Date(1000);
					};
					this.model = new ImageObjet({
						size : {
							width : 200,
							height: 150
						},
						position : {
							x : 500,
							y : 1
						},
						rotation : 32.6,
						image : "http://www.naver.com"
					});
				});
				
				shouldBehaveLikeObjet();

				describe("image",function(){
					it("should set image",function(){
						this.model.image.should.equal("http://www.naver.com");
					});
				});
			});
		});
	});
});