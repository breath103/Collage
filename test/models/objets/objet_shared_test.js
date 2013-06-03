module.exports = {
	shouldBehaveLike2DTransformableObjet : function(model){
		describe("createdTime",function(){
			it("should have createdTime",function(){
				this.model.createdTime.should.be.an.instanceOf(Date);
			});
			xit("should set as a default value(Date.now)",function(){
			});
		});
		describe("position",function(){
			it("should set position",function(){
				this.model.position.x.should.equal(500);
				this.model.position.y.should.equal(1);
			});
		});
		describe("size",function(){
			it("should set size",function(){
				this.model.size.width.should.equal(200);
				this.model.size.height.should.equal(150);
			});
		});
		describe("rotation",function(){
			it("should set size",function(){
				this.model.rotation.should.equal(32.6);
			});
		});
	}
}
