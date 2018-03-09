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
    define(['ApiClient', 'model/Error', 'model/FacetItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/FacetItem'));
  } else {
    // Browser globals (root is window)
    if (!root.MarketcheckCarsApi) {
      root.MarketcheckCarsApi = {};
    }
    root.MarketcheckCarsApi.FacetsApi = factory(root.MarketcheckCarsApi.ApiClient, root.MarketcheckCarsApi.Error, root.MarketcheckCarsApi.FacetItem);
  }
}(this, function(ApiClient, Error, FacetItem) {
  'use strict';

  /**
   * Facets service.
   * @module api/FacetsApi
   * @version 1.0.3
   */

  /**
   * Constructs a new FacetsApi. 
   * @alias module:api/FacetsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getFacets operation.
     * @callback module:api/FacetsApi~getFacetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FacetItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Facets
     * [Merged with the /search API - Please check the &#39;facets&#39; parameter to the Search API above] Get the facets for the given simple filter criteria (by given VIN&#39;s basic specification, Or by Year, Make, Model, Trim criteria) and facet fields
     * @param {String} fields Comma separated list of fields to generate facets for. Supported fields are - year, make, model, trim, exterior_color, interior_color, drivetrain, vehicle_type, car_type, body_style, body_subtype, doors
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The API Authentication Key. Mandatory with all API calls.
     * @param {String} opts.vin VIN as a reference to the type of car for which facets data is to be returned
     * @param {String} opts.year Year of the car
     * @param {String} opts.make Make of the car
     * @param {String} opts.model Model of the Car
     * @param {String} opts.trim Trim of the Car
     * @param {module:api/FacetsApi~getFacetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FacetItem>}
     */
    this.getFacets = function(fields, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'fields' is set
      if (fields === undefined || fields === null) {
        throw new Error("Missing the required parameter 'fields' when calling getFacets");
      }


      var pathParams = {
      };
      var queryParams = {
        'api_key': opts['apiKey'],
        'vin': opts['vin'],
        'year': opts['year'],
        'make': opts['make'],
        'model': opts['model'],
        'trim': opts['trim'],
        'fields': fields,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [FacetItem];

      return this.apiClient.callApi(
        '/facets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
