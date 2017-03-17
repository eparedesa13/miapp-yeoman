'use strict';

describe('Controller: AgregarCtrl', function () {

  // load the controller's module
  beforeEach(module('miappApp'));

  var AgregarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AgregarCtrl = $controller('AgregarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AgregarCtrl.awesomeThings.length).toBe(3);
  });
});
