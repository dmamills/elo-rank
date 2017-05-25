var should = require('should'),
		Elo = require('./../index');
describe('elo',function(){

	it('should create instance without new',function() {
		var elo = new Elo();
		elo.should.be.instanceOf(Elo);
	});

	it('K factor should default to 32',function(){
		var elo = new Elo();
		elo.getKFactor().should.equal(32);
	});

	it('should allow K factor to be set in constructor',function() {
		var elo = new Elo(5);
		elo.getKFactor().should.equal(5);
	});

	it('should allow K factor to be set by setter',function() {
		var elo = new Elo();
		elo.setKFactor(20);
		elo.getKFactor().should.equal(20);
	});

	it('should calculate expected properly',function() {
		var elo = new Elo();
		elo.getExpected(1200,1400).should.be.approximately(0.24025,0.1);
	});

	it('Expect 50/50 chance for equal ranks',function() {
		var elo = new Elo();
		elo.getExpected(1000,1000).should.equal(0.5);
	});

	it('should be almost 100% chance for 0 rank',function() {
		var elo = new Elo();
		elo.getExpected(1000,0).should.be.approximately(0.99,0.01);
	});


	it('should update rating properly',function() {
		var elo = new Elo();
		var expectedA = elo.getExpected(1200,1400);
		var expectedB = elo.getExpected(1400,1200);
		elo.updateRating(expectedA,1,1200).should.equal(1224);
		elo.updateRating(expectedB,0,1400).should.equal(1376);
	});


	it('should round rating properly',function() {
		var elo = new Elo();
		var expectedA = elo.getExpected(1802,1186);
		var expectedB = elo.getExpected(1186,1802);
		elo.updateRating(expectedA,1,1802).should.equal(1803);
		elo.updateRating(expectedB,0,1186).should.equal(1185);
	});

});
