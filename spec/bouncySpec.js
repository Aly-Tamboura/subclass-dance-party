describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new bouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });
  it('should have a method that makes it move (should never have the same top location between steps)', function() {
    var loc = bouncyDancer.top;
    bouncyDancer.step();
    var newLoc = bouncyDancer.top;
    expect(loc).not.to.be.eql(newLoc);
  });

  it('should move to the edge of the dancefloor and change directon', function() {

  });

  it('should have a step function that makes it blink', function() {
    sinon.spy(bouncyDancer.$node, 'toggle');
    bouncyDancer.step();
    expect(bouncyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bouncyDancer, 'step');
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
  });
});
