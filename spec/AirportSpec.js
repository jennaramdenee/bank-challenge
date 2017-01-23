describe('Airport', function(){

  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('confirms a landed plane is', function() {
    it('in the airport', function() {
      airport.receiveLandedPlane();
      expect(airport.planes.length).toEqual(1);
    });
  });

  describe('confirms a flying plane is', function() {
    it('NOT in the airport', function() {
      expect(airport.planes.length).toEqual(0);
    });
  });

  describe('confirms a landed plane', function() {
    it('has landed', function() {
      airport.receiveLandedPlane(plane);
      expect(airport.confirmLanding(plane)).toEqual(true);
    });
  });


});
