var CircleDancer = function( top, left, timeBetweenSteps ) {
	Dancer.call( this, top, left, timeBetweenSteps );
  this.$node.addClass( 'circle' );
  this.rotation = 0;
}

CircleDancer.prototype = Object.create( Dancer.prototype );
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function() {
	Dancer.prototype.step.call( this );
  this.$node.css( 'transform', 'rotate(' + this.rotation + 'deg)' );
  this.rotation += 5;
}