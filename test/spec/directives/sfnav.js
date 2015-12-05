'use strict';

describe('Directive: sfNav', function () {

  // load the directive's module
  beforeEach(module('snowfirApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sf-nav></sf-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sfNav directive');
  }));
});
