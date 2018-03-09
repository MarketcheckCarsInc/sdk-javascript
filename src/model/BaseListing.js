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
    define(['ApiClient', 'model/Build', 'model/Dealer', 'model/ListingMedia'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Build'), require('./Dealer'), require('./ListingMedia'));
  } else {
    // Browser globals (root is window)
    if (!root.MarketcheckCarsApi) {
      root.MarketcheckCarsApi = {};
    }
    root.MarketcheckCarsApi.BaseListing = factory(root.MarketcheckCarsApi.ApiClient, root.MarketcheckCarsApi.Build, root.MarketcheckCarsApi.Dealer, root.MarketcheckCarsApi.ListingMedia);
  }
}(this, function(ApiClient, Build, Dealer, ListingMedia) {
  'use strict';




  /**
   * The BaseListing model module.
   * @module model/BaseListing
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>BaseListing</code>.
   * Minimal set of attributes describing a listing
   * @alias module:model/BaseListing
   * @class
   */
  var exports = function() {
    var _this = this;






























  };

  /**
   * Constructs a <code>BaseListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseListing} obj Optional instance to populate.
   * @return {module:model/BaseListing} The populated <code>BaseListing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('heading')) {
        obj['heading'] = ApiClient.convertToType(data['heading'], 'String');
      }
      if (data.hasOwnProperty('vin')) {
        obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
      }
      if (data.hasOwnProperty('stock_no')) {
        obj['stock_no'] = ApiClient.convertToType(data['stock_no'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('miles')) {
        obj['miles'] = ApiClient.convertToType(data['miles'], 'String');
      }
      if (data.hasOwnProperty('inventory_type')) {
        obj['inventory_type'] = ApiClient.convertToType(data['inventory_type'], 'String');
      }
      if (data.hasOwnProperty('last_seen_at')) {
        obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Number');
      }
      if (data.hasOwnProperty('last_seen_at_date')) {
        obj['last_seen_at_date'] = ApiClient.convertToType(data['last_seen_at_date'], 'String');
      }
      if (data.hasOwnProperty('scraped_at_date')) {
        obj['scraped_at_date'] = ApiClient.convertToType(data['scraped_at_date'], 'Number');
      }
      if (data.hasOwnProperty('first_seen_at')) {
        obj['first_seen_at'] = ApiClient.convertToType(data['first_seen_at'], 'Number');
      }
      if (data.hasOwnProperty('first_seen_at_date')) {
        obj['first_seen_at_date'] = ApiClient.convertToType(data['first_seen_at_date'], 'String');
      }
      if (data.hasOwnProperty('ref_price')) {
        obj['ref_price'] = ApiClient.convertToType(data['ref_price'], 'String');
      }
      if (data.hasOwnProperty('ref_miles')) {
        obj['ref_miles'] = ApiClient.convertToType(data['ref_miles'], 'String');
      }
      if (data.hasOwnProperty('ref_price_dt')) {
        obj['ref_price_dt'] = ApiClient.convertToType(data['ref_price_dt'], 'Number');
      }
      if (data.hasOwnProperty('ref_miles_dt')) {
        obj['ref_miles_dt'] = ApiClient.convertToType(data['ref_miles_dt'], 'Number');
      }
      if (data.hasOwnProperty('dom')) {
        obj['dom'] = ApiClient.convertToType(data['dom'], 'Number');
      }
      if (data.hasOwnProperty('dom_180')) {
        obj['dom_180'] = ApiClient.convertToType(data['dom_180'], 'Number');
      }
      if (data.hasOwnProperty('dom_active')) {
        obj['dom_active'] = ApiClient.convertToType(data['dom_active'], 'Number');
      }
      if (data.hasOwnProperty('seller_type')) {
        obj['seller_type'] = ApiClient.convertToType(data['seller_type'], 'String');
      }
      if (data.hasOwnProperty('exterior_color')) {
        obj['exterior_color'] = ApiClient.convertToType(data['exterior_color'], 'String');
      }
      if (data.hasOwnProperty('interior_color')) {
        obj['interior_color'] = ApiClient.convertToType(data['interior_color'], 'String');
      }
      if (data.hasOwnProperty('vdp_url')) {
        obj['vdp_url'] = ApiClient.convertToType(data['vdp_url'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = ListingMedia.constructFromObject(data['media']);
      }
      if (data.hasOwnProperty('build')) {
        obj['build'] = Build.constructFromObject(data['build']);
      }
      if (data.hasOwnProperty('dealer')) {
        obj['dealer'] = Dealer.constructFromObject(data['dealer']);
      }
      if (data.hasOwnProperty('is_certified')) {
        obj['is_certified'] = ApiClient.convertToType(data['is_certified'], 'Number');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique identifier representing a specific listing from the Marketcheck database
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Listing title as displayed on the source website
   * @member {String} heading
   */
  exports.prototype['heading'] = undefined;
  /**
   * VIN for the car
   * @member {String} vin
   */
  exports.prototype['vin'] = undefined;
  /**
   * Stock no of the car
   * @member {String} stock_no
   */
  exports.prototype['stock_no'] = undefined;
  /**
   * Asking price for the car
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Odometer reading / reported miles usage for the car
   * @member {String} miles
   */
  exports.prototype['miles'] = undefined;
  /**
   * Inventory type of car
   * @member {String} inventory_type
   */
  exports.prototype['inventory_type'] = undefined;
  /**
   * Listing last seen at (most recent) timestamp
   * @member {Number} last_seen_at
   */
  exports.prototype['last_seen_at'] = undefined;
  /**
   * Listing last seen at (most recent) date
   * @member {String} last_seen_at_date
   */
  exports.prototype['last_seen_at_date'] = undefined;
  /**
   * Listing first seen at first scraped date
   * @member {Number} scraped_at_date
   */
  exports.prototype['scraped_at_date'] = undefined;
  /**
   * Listing first seen at first scraped timestamp
   * @member {Number} first_seen_at
   */
  exports.prototype['first_seen_at'] = undefined;
  /**
   * Listing first seen at first scraped date
   * @member {String} first_seen_at_date
   */
  exports.prototype['first_seen_at_date'] = undefined;
  /**
   * Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date
   * @member {String} ref_price
   */
  exports.prototype['ref_price'] = undefined;
  /**
   * Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date
   * @member {String} ref_miles
   */
  exports.prototype['ref_miles'] = undefined;
  /**
   * The date at which the last price was reported online. This is earlier to last_seen_date
   * @member {Number} ref_price_dt
   */
  exports.prototype['ref_price_dt'] = undefined;
  /**
   * The date at which the last miles was reported online. This is earlier to last_seen_date
   * @member {Number} ref_miles_dt
   */
  exports.prototype['ref_miles_dt'] = undefined;
  /**
   * Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car
   * @member {Number} dom
   */
  exports.prototype['dom'] = undefined;
  /**
   * Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car
   * @member {Number} dom_180
   */
  exports.prototype['dom_180'] = undefined;
  /**
   * Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car
   * @member {Number} dom_active
   */
  exports.prototype['dom_active'] = undefined;
  /**
   * Seller type for the car
   * @member {String} seller_type
   */
  exports.prototype['seller_type'] = undefined;
  /**
   * Exterior color of the car
   * @member {String} exterior_color
   */
  exports.prototype['exterior_color'] = undefined;
  /**
   * Interior color of the car
   * @member {String} interior_color
   */
  exports.prototype['interior_color'] = undefined;
  /**
   * Vehicle Details Page url of the specific car
   * @member {String} vdp_url
   */
  exports.prototype['vdp_url'] = undefined;
  /**
   * Source domain of the listing
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * Car Media Attributes - main photo link/url and photo links
   * @member {module:model/ListingMedia} media
   */
  exports.prototype['media'] = undefined;
  /**
   * @member {module:model/Build} build
   */
  exports.prototype['build'] = undefined;
  /**
   * @member {module:model/Dealer} dealer
   */
  exports.prototype['dealer'] = undefined;
  /**
   * Certified car
   * @member {Number} is_certified
   */
  exports.prototype['is_certified'] = undefined;
  /**
   * Distance of the car's location from the specified user lcoation
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;



  return exports;
}));


