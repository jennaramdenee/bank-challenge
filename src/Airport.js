var Airport = function(){this.planes = []};

Airport.prototype.receiveLandedPlane = function(plane){
  this.planes.push(plane);
};

Airport.prototype.confirmLanding = function(plane){
  return this.planes.includes(plane);
};
