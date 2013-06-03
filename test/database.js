var mongoose = require("mongoose");
var should   = require("should");

before(function(done){
	var database = require("../database")(function(){
		done();
	});	
});
describe("database",function(){
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
	});
});