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
    instance = new MarketcheckCarsApi.ListingDebugAttributes();
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

  describe('ListingDebugAttributes', function() {
    it('should create an instance of ListingDebugAttributes', function() {
      // uncomment below and update the code to test ListingDebugAttributes
      //var instance = new MarketcheckCarsApi.ListingDebugAttributes();
      //expect(instance).to.be.a(MarketcheckCarsApi.ListingDebugAttributes);
    });

    it('should have the property robotId (base name: "robot_id")', function() {
      // uncomment below and update the code to test the property robotId
      //var instance = new MarketcheckCarsApi.ListingDebugAttributes();
      //expect(instance).to.be();
    });

    it('should have the property cycleId (base name: "cycle_id")', function() {
      // uncomment below and update the code to test the property cycleId
      //var instance = new MarketcheckCarsApi.ListingDebugAttributes();
      //expect(instance).to.be();
    });

    it('should have the property scrapedAt (base name: "scraped_at")', function() {
      // uncomment below and update the code to test the property scrapedAt
      //var instance = new MarketcheckCarsApi.ListingDebugAttributes();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "template_id")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new MarketcheckCarsApi.ListingDebugAttributes();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new MarketcheckCarsApi.ListingDebugAttributes();
      //expect(instance).to.be();
    });

    it('should have the property taxonomyVin (base name: "taxonomy_vin")', function() {
      // uncomment below and update the code to test the property taxonomyVin
      //var instance = new MarketcheckCarsApi.ListingDebugAttributes();
      //expect(instance).to.be();
    });

  });

}));
