var should = require('should');

describe('Hello Y\'all...', function() {

  it('should pass this test', function(done){
    var i = 1 + 2;
    i.should.equal(3);
    done();
  });

  describe ('Bob...', function() {
    var bob;
    before(function(done){
      bob = { firstName: 'Bob', lastName: 'Middleman' };
      done();
    });

    it('should have a firstName', function(){
      should.exist(bob);
      bob.should.have.property('firstName');
      bob.firstName.should.be.instanceOf(String);
      bob.firstName.length.should.be.above(0);
    });

    it('should have a lastName', function(){
      should.exist(bob);
      bob.should.have.property('lastName');
      bob.lastName.should.be.instanceOf(String);
      bob.lastName.length.should.be.above(0);
    });

  });
});
