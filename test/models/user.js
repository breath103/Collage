describe("User",function(){
	var User = null;
	beforeEach(function(){
		User = require("mongoose").models.User;
	});
	
	it("should be exist",function(){
		User.should.be.a('function');
	});
	describe("static methods",function(){
		describe("middleware",function(){
			describe("findByUsername",function(){
				User.middleware.findByUsername.should.be.a("function");
			});
		});
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

