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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MarketcheckCarsApi) {
      root.MarketcheckCarsApi = {};
    }
    root.MarketcheckCarsApi.ListingVDP = factory(root.MarketcheckCarsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListingVDP model module.
   * @module model/ListingVDP
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>ListingVDP</code>.
   * Describes the VDP (Vehicle Details Page) HTML object
   * @alias module:model/ListingVDP
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ListingVDP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListingVDP} obj Optional instance to populate.
   * @return {module:model/ListingVDP} The populated <code>ListingVDP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('crawled_at')) {
        obj['crawled_at'] = ApiClient.convertToType(data['crawled_at'], 'Number');
      }
      if (data.hasOwnProperty('vdp_url')) {
        obj['vdp_url'] = ApiClient.convertToType(data['vdp_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * The HTML string for the listing web page
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * The timestamp indicating the time when the VDP was cached
   * @member {Number} crawled_at
   */
  exports.prototype['crawled_at'] = undefined;
  /**
   * The URL of the VDP
   * @member {String} vdp_url
   */
  exports.prototype['vdp_url'] = undefined;



  return exports;
}));


