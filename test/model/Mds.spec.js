/**
 * Marketcheck Cars API
 * <b>Access the New, Used and Certified cars inventories for all Car Dealers in US.</b> <br/>The data is sourced from online listings by over 44,000 Car dealers in US. At any time, there are about 6.2M searchable listings (about 1.9M unique VINs) for Used & Certified cars and about 6.6M (about 3.9M unique VINs) New Car listings from all over US. We use this API at the back for our website <a href='https://www.marketcheck.com' target='_blank'>www.marketcheck.com</a> and our Android and iOS mobile apps too.<br/><h5> Few useful links : </h5><ul><li>A quick view of the API and the use cases is depicated <a href='https://portals.marketcheck.com/mcapi/' target='_blank'>here</a></li><li>The Postman collection with various usages of the API is shared here https://www.getpostman.com/collections/2752684ff636cdd7bac2</li></ul>
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MarketcheckCarsApi);
  }
}(this, function(expect, MarketcheckCarsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MarketcheckCarsApi.Mds();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Mds', function() {
    it('should create an instance of Mds', function() {
      // uncomment below and update the code to test Mds
      //var instance = new MarketcheckCarsApi.Mds();
      //expect(instance).to.be.a(MarketcheckCarsApi.Mds);
    });

    it('should have the property mds (base name: "mds")', function() {
      // uncomment below and update the code to test the property mds
      //var instance = new MarketcheckCarsApi.Mds();
      //expect(instance).to.be();
    });

    it('should have the property totalActiveCarsForYmmt (base name: "total_active_cars_for_ymmt")', function() {
      // uncomment below and update the code to test the property totalActiveCarsForYmmt
      //var instance = new MarketcheckCarsApi.Mds();
      //expect(instance).to.be();
    });

    it('should have the property totalCarsSoldInLast45Days (base name: "total_cars_sold_in_last_45_days")', function() {
      // uncomment below and update the code to test the property totalCarsSoldInLast45Days
      //var instance = new MarketcheckCarsApi.Mds();
      //expect(instance).to.be();
    });

  });

}));
