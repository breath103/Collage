var sharedTests = require("./objet_shared_test");

describe("ImageObjet",function(){
	var ImageObjet = null;
	beforeEach(function(){
		ImageObjet = require("mongoose").models.ImageObjet;
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
	
		sharedTests.shouldBehaveLike2DTransformableObjet();

		describe("image",function(){
			it("should set image",function(){
				this.model.image.should.equal("http://www.naver.com");
			});
		});
	});
});
