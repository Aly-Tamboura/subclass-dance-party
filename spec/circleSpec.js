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
    sinon.spy(circleDancer.$node, 'toggle');
    circleDancer.step();
    console.log( circleDancer.$node );
    expect(circleDancer.$node.css('transform')).to.eql('rotate(7deg)');
    // expect(circleDancer.$node.toggle.called).to.be.true;
  });

  describe('rotate', function() {
    it('should have a return to its original position after 12 ticks', function() {
    });


    it('should spin at a rate of at least once per second', function() {
      sinon.spy(circleDancer, 'step');
      expect(circleDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(circleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(circleDancer.step.callCount).to.be.equal(2);
    });
  });
});
