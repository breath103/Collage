var should   = require("should");

describe("Collage",function(){
	this.model = null;
	var Collage = null;
	before(function(){
		Collage = require("mongoose").models.Collage;
	});
	beforeEach(function(){
		this.model = new Collage({
			name : "breath103"
		});
	});
	describe("model",function(){
		it("should be exist",function(){
			Collage.should.be.a('function');
		});
	});
	describe("attributes",function(){
		describe("name",function(){
			it("should set name",function(){
				this.model.name.should.equal("breath103");
			});
		});
	});
	describe("methods",function(){
		describe("middleware methods",function(){
			describe("findById",function(){
				var req,res,next;
				beforeEach(function(){
					req = {
						param : function(name){
							if(name == "id") {return "1542";}
						}
					};
					res = {};
					next = function(){};
				});
				beforeEach(function(){
					Collage.middleware.findById(req,res,next);
				});
				it("should return collage find by id",function(){
				//	req.collage.id.should.equal(1542);
				});
			});
		});
		
		describe("static methods",function(){
			
		});
		xdescribe("instacne methods",function(){
			describe("getLinkObjets",function(){
			
			});
			describe("getImageObjets",function(){
			
			});
			describe("getObjets",function(){
			
			});
		});
	});
});
