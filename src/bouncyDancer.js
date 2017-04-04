var BouncyDancer = function( top, left, timeBetweenSteps ) {
  // debugger;
  this.target = this.chooseTarget();
  Dancer.call( this, top, left, timeBetweenSteps );
  this.timeBetweenSteps /= 3;
  this.$node.addClass( 'bouncy' );
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
  if ( Math.abs(this.target.top - this.top) <= 5 && Math.abs(this.target.left - this.left) <=5 ) {
    this.target = this.chooseTarget();
  } else {
    this.setPosition((this.top + vertStep), (this.left + horzStep));
  }

};
//
BouncyDancer.prototype.chooseTarget = function() {
  //pick random dancer from dancer array
  var randNum = Math.floor(Math.random() * window.dancers.length);

  var pickedDancer = window.dancers[randNum];
  if(window.dancers.length < 2) {return {top: 100, left: 500}};
    //if pics itself choose another dancer
    do {
      var randNum = Math.floor(Math.random() * window.dancers.length);
      pickedDancer = window.dancers[randNum];
    }
    while(pickedDancer === this);
    //return the chosen dancer
    return pickedDancer;
};

BouncyDancer.prototype.lineUp = function() {
  var dancers = window.dancers;
  var bouncyDancer = dancers.filter( function(dancer) {
    return (dancer.constructor === BouncyDancer);
  });
  bouncyDancer.forEach( function(item, idx) {
    item.$node.css({'top': idx * 50, 'left': idx * 50});
  });
}