var mongoose = require("mongoose");
var should   = require("should");

var app = null;
describe("routes",function(){
	before(function(){
		app = require("../../app")();
	});
	
	describe("express server",function(){
		it("should create express",function(){
			should.exist(app);
		});
	});
	
	after(function(){
		app = null;
	});
});