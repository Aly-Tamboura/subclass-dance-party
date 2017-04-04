var CircleDancer = function( top, left, timeBetweenSteps ) {
	Dancer.call( this, top, left, timeBetweenSteps );
  this.$node.addClass( 'circle' );
  this.rotation = 0;
}

CircleDancer.prototype = Object.create( Dancer.prototype );
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function() {
	Dancer.prototype.step.call( this );
  this.rotation += 5;
  this.$node.css( 'transform', 'rotate(' + this.rotation + 'deg)' );
}

CircleDancer.prototype.lineUp = function() {
  var dancers = window.dancers;
  var circleDancers = dancers.filter( function(dancer) {
    return (dancer.constructor === CircleDancer);
  });
  circleDancers.forEach( function(item, idx) {
    item.$node.css({'top': idx * 50, 'left': idx * 50});
  });
}