// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(() =>{
     this.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.left = left;
  this.top = top;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// Dancer.prototype.travelTo = function(newTop, newLeft, pixelsPerSecond) {
//   var pixelDistance = Math.sqrt( Math.pow(newTop - top, 2) + Math.pow(newLeft - left, 2) );
//   var travelTime = pixelDistance / pixelsPerSecond;
//   this.$node.animate( { 'top': newTop, 'left': newLeft }, travelTime );
// };