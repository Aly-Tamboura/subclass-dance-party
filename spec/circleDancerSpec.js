describe('circleDancer', function() {
  var circleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    circleDancer = new CircleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(circleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it spin', function() {
    circleDancer.step();
    var transform = circleDancer.$node.css('transform');
    var rotationDegrees = parseInt(transform.slice(7).slice(0,-4)); // format is 'rotate(#deg)'
    expect(rotationDegrees).to.not.be.equal(0);
  });

  describe('dance', function() {

    it('should rotate at a rate of at least once per second', function() {
      sinon.spy(circleDancer, 'step');
      expect(circleDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);
      expect(circleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(circleDancer.step.callCount).to.be.equal(2);
    });
  });
});
