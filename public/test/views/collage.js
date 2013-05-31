describe("CollageView",function(){
	describe("model",function(){
		it("should exist",function(){
			CollageView.should.be.an("function");
		});
	});
	describe("attributes",function(){
		this.view = null
		beforeEach(function(){
			this.view = new CollageView({ 
				model : new Collage({
					objets : {
						images : [],
						links : []
					} 
				}) 
			});
		});
		it("should have instance",function(){
			this.view.should.be.an.instanceof(CollageView);
		});
	});
	describe("render",function(){
		
	});
});
