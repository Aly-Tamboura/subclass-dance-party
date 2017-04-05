var BouncyDancer = function( top, left, timeBetweenSteps ) {
  // debugger;
  this.isSeekingTargets = true;
  this.target = this.chooseTarget();
  Dancer.call( this, top, left, timeBetweenSteps );
  this.timeBetweenSteps /= 4;
  this.$node.addClass( 'bouncy' );
  
  var seekTargets = function() { this.isSeekingTargets = true; }
  this.$node.on('mouseover', seekTargets.bind(this) );
};

BouncyDancer.prototype = Object.create( Dancer.prototype );
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call( this );
  //calculate horizontal distance
  var bdcTop = this.top;
  var bdcLeft = this.left;

  var targetTop = this.target.top;
  var targetLeft = this.target.left;
  //calculate horizintal difference
  var hDistance = targetLeft - bdcLeft;
  //calculate verticle distance
  var vDistance = targetTop - bdcTop;
  //calculate direct distance
  var totDistance = Math.sqrt(Math.pow(hDistance, 2) + Math.pow(vDistance, 2)); 
  //calculate fraction of distance to travel in each step
  var travel = 10/totDistance;
  //calculate verticle step
  var vertStep = vDistance * travel;
  //calculate horizontal step
  var horzStep = hDistance * travel;

  //make the step/move dancer

   //if at taget choose new target
    //if this dancer location is within 5px of target
  if (this.isSeekingTargets === false) {
    // debugger;
  }
  if (  Math.abs(this.target.top - this.top) <= 5 && Math.abs(this.target.left - this.left) <=5 ) {
    if ( this.isSeekingTargets ) {    
      this.target = this.chooseTarget();
    }
  } else {
    this.setPosition((this.top + vertStep), (this.left + horzStep));
  }

};

BouncyDancer.prototype.chooseTarget = function() {
  if(window.dancers.length < 2) {
    return {top: 100, left: 500}
  };

  //if pics itself choose another dancer
  do {
    var randNum = Math.floor(Math.random() * window.dancers.length);
    pickedDancer = window.dancers[randNum];
  }
  while(pickedDancer === this);

  return pickedDancer;
};

BouncyDancer.prototype.lineUp = function() {
  var width = $('body').css('width').slice(0, -2) / 2;
  var dancers = window.dancers;
  var bouncyDancer = dancers.filter( function(dancer) {
    return (dancer.constructor === BouncyDancer);
  });
  bouncyDancer.forEach( function(item, idx) {
    //disable target seeking
    item.isSeekingTargets = false;
    //horizontal position is the center of screen
    // vertical index * 5a0 from top
    item.target = {left: width, top: (idx  * 50 + 50)};
    // item.setPosition((idx * 50 + 50), width);
    //set this dancers target to new position
  });
};



















