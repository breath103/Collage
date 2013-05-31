describe("ImageObjet",function(){
	describe("prototype",function(){
		it("should exist",function(){
			ImageObjetView.should.be.an("function");
		});
	});
	describe("instance",function(){
		this.model = null;
		this.view = null;
		beforeEach(function(){
			this.model = new ImageObjet({
				position : {x:100,y:100},
				size : {width:100,height:100}
			});
			this.view  = new ImageObjetView({
				model : this.model
			});
		});
		it("should be initialized",function(){
			this.view.should.be.an.instanceof(ImageObjetView);
		});
		describe("attributes",function(){
			it("should have template",function(){
			
			});
		});
	});
});
