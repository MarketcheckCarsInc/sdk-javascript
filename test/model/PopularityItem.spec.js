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
    instance = new MarketcheckCarsApi.PopularityItem();
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

  describe('PopularityItem', function() {
    it('should create an instance of PopularityItem', function() {
      // uncomment below and update the code to test PopularityItem
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be.a(MarketcheckCarsApi.PopularityItem);
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be();
    });

    it('should have the property left (base name: "left")', function() {
      // uncomment below and update the code to test the property left
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be();
    });

    it('should have the property right (base name: "right")', function() {
      // uncomment below and update the code to test the property right
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be();
    });

    it('should have the property difference (base name: "difference")', function() {
      // uncomment below and update the code to test the property difference
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be();
    });

    it('should have the property thumbs (base name: "thumbs")', function() {
      // uncomment below and update the code to test the property thumbs
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be();
    });

    it('should have the property deltaPercent (base name: "delta_percent")', function() {
      // uncomment below and update the code to test the property deltaPercent
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new MarketcheckCarsApi.PopularityItem();
      //expect(instance).to.be();
    });

  });

}));