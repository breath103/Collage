var sharedTests = require("./objet_shared_test");

describe("LinkObjet",function(){
	var LinkObjet = null;
	beforeEach(function(){
		LinkObjet = require("mongoose").models.LinkObjet;
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
		
		sharedTests.shouldBehaveLike2DTransformableObjet();
		
		describe("link",function(){
			it("should set link",function(){
				this.model.link.should.equal("http://www.naver.com");
			});
		});
	});
});
