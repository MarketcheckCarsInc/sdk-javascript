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
    instance = new MarketcheckCarsApi.Dealer();
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

  describe('Dealer', function() {
    it('should create an instance of Dealer', function() {
      // uncomment below and update the code to test Dealer
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be.a(MarketcheckCarsApi.Dealer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property franchiseId (base name: "franchise_id")', function() {
      // uncomment below and update the code to test the property franchiseId
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property carType (base name: "car_type")', function() {
      // uncomment below and update the code to test the property carType
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property targetUrlNew (base name: "target_url_new")', function() {
      // uncomment below and update the code to test the property targetUrlNew
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property targetUrlUsed (base name: "target_url_used")', function() {
      // uncomment below and update the code to test the property targetUrlUsed
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property targetUrlCertified (base name: "target_url_certified")', function() {
      // uncomment below and update the code to test the property targetUrlCertified
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property dealerType (base name: "dealer_type")', function() {
      // uncomment below and update the code to test the property dealerType
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

    it('should have the property rating (base name: "rating")', function() {
      // uncomment below and update the code to test the property rating
      //var instance = new MarketcheckCarsApi.Dealer();
      //expect(instance).to.be();
    });

  });

}));