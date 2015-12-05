'use strict';

describe('Service: autoNav', function () {

  // load the service's module
  beforeEach(module('snowfirApp'));

  // instantiate service
  var autoNav;
  beforeEach(inject(function (_autoNav_) {
    autoNav = _autoNav_;
  }));

  it('should do something', function () {
    expect(!!autoNav).toBe(true);
  });

});
