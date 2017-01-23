var Plane = function(){this.flying = false;};

Plane.prototype.isFlying = function(){
  return this.flying;
};

Plane.prototype.takenOff = function(){
  this.flying = true;
};

Plane.prototype.landed = function(){
  this.flying = false;
};
