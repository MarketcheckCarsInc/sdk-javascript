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
    root.MarketcheckCarsApi.ListingDebugAttributes = factory(root.MarketcheckCarsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListingDebugAttributes model module.
   * @module model/ListingDebugAttributes
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>ListingDebugAttributes</code>.
   * @alias module:model/ListingDebugAttributes
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ListingDebugAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListingDebugAttributes} obj Optional instance to populate.
   * @return {module:model/ListingDebugAttributes} The populated <code>ListingDebugAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('robot_id')) {
        obj['robot_id'] = ApiClient.convertToType(data['robot_id'], 'Number');
      }
      if (data.hasOwnProperty('cycle_id')) {
        obj['cycle_id'] = ApiClient.convertToType(data['cycle_id'], 'Number');
      }
      if (data.hasOwnProperty('scraped_at')) {
        obj['scraped_at'] = ApiClient.convertToType(data['scraped_at'], 'String');
      }
      if (data.hasOwnProperty('template_id')) {
        obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('taxonomy_vin')) {
        obj['taxonomy_vin'] = ApiClient.convertToType(data['taxonomy_vin'], 'String');
      }
    }
    return obj;
  }

  /**
   * Robot id
   * @member {Number} robot_id
   */
  exports.prototype['robot_id'] = undefined;
  /**
   * Cycle id
   * @member {Number} cycle_id
   */
  exports.prototype['cycle_id'] = undefined;
  /**
   * Scraped date and time
   * @member {String} scraped_at
   */
  exports.prototype['scraped_at'] = undefined;
  /**
   * Template id
   * @member {Number} template_id
   */
  exports.prototype['template_id'] = undefined;
  /**
   * User id
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * Taxonomy vin
   * @member {String} taxonomy_vin
   */
  exports.prototype['taxonomy_vin'] = undefined;



  return exports;
}));

