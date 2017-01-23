describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });


  describe('knows when a plane has', function() {
    it('taken off', function() {
      plane.takenOff();
      expect(plane.flying).toEqual(true);
    });
  });

  describe('knows when a plane has', function(){
    it('NOT taken off', function() {
      expect(plane.flying).toEqual(false);
    });
  });

  describe('knows when a plane is', function(){
    it('flying', function(){
      expect(plane.isFlying()).toEqual(false);
    });
  });



});
