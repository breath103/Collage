describe("ImageObjet",function(){
	this.model = null;
	beforeEach(function(){
		this.model = new ImageObjet({
			
		});
	});

	describe("modelName",function(){
		it("should have modelName as a static variable",function(){
			this.model.modelName.should.equal("ImageObjet");
		});
	});
});
