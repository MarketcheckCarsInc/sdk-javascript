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
    define(['ApiClient', 'model/Error', 'model/Listing', 'model/ListingExtraAttributes', 'model/ListingMedia', 'model/ListingVDP', 'model/SearchResponse', 'model/VinReport'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Listing'), require('../model/ListingExtraAttributes'), require('../model/ListingMedia'), require('../model/ListingVDP'), require('../model/SearchResponse'), require('../model/VinReport'));
  } else {
    // Browser globals (root is window)
    if (!root.MarketcheckCarsApi) {
      root.MarketcheckCarsApi = {};
    }
    root.MarketcheckCarsApi.ListingsApi = factory(root.MarketcheckCarsApi.ApiClient, root.MarketcheckCarsApi.Error, root.MarketcheckCarsApi.Listing, root.MarketcheckCarsApi.ListingExtraAttributes, root.MarketcheckCarsApi.ListingMedia, root.MarketcheckCarsApi.ListingVDP, root.MarketcheckCarsApi.SearchResponse, root.MarketcheckCarsApi.VinReport);
  }
}(this, function(ApiClient, Error, Listing, ListingExtraAttributes, ListingMedia, ListingVDP, SearchResponse, VinReport) {
  'use strict';

  /**
   * Listings service.
   * @module api/ListingsApi
   * @version 1.0.3
   */

  /**
   * Constructs a new ListingsApi. 
   * @alias module:api/ListingsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getListing operation.
     * @callback module:api/ListingsApi~getListingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Listing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listing by id
     * Get a particular listing by its id
     * @param {String} id Listing id to get all the listing attributes
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The API Authentication Key. Mandatory with all API calls.
     * @param {module:api/ListingsApi~getListingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Listing}
     */
    this.getListing = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getListing");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'api_key': opts['apiKey'],
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
      var returnType = Listing;

      return this.apiClient.callApi(
        '/listing/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getListingExtra operation.
     * @callback module:api/ListingsApi~getListingExtraCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListingExtraAttributes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Long text Listings attributes for Listing with the given id
     * Get listing options, features, seller comments
     * @param {String} id Listing id to get all the long text listing attributes
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The API Authentication Key. Mandatory with all API calls.
     * @param {module:api/ListingsApi~getListingExtraCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListingExtraAttributes}
     */
    this.getListingExtra = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getListingExtra");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'api_key': opts['apiKey'],
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
      var returnType = ListingExtraAttributes;

      return this.apiClient.callApi(
        '/listing/{id}/extra', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getListingMedia operation.
     * @callback module:api/ListingsApi~getListingMediaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListingMedia} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listing media by id
     * Get listing media (photo, photos) by id
     * @param {String} id Listing id to get all the listing attributes
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The API Authentication Key. Mandatory with all API calls.
     * @param {module:api/ListingsApi~getListingMediaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListingMedia}
     */
    this.getListingMedia = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getListingMedia");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'api_key': opts['apiKey'],
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
      var returnType = ListingMedia;

      return this.apiClient.callApi(
        '/listing/{id}/media', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getListingVDP operation.
     * @callback module:api/ListingsApi~getListingVDPCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListingVDP} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get listing HTML
     * Cached HTML of the Vehicle Details Page (VDP) for the listing. The HTML is cached only for 7 days for all listings. So this API could be used to get HTML of mostly active listings and that have recently expired
     * @param {String} id Listing id to get the vehicle details page (VDP) HTML
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The API Authentication Key. Mandatory with all API calls.
     * @param {String} opts.html Get only HTML for given listings VDP page
     * @param {module:api/ListingsApi~getListingVDPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListingVDP}
     */
    this.getListingVDP = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getListingVDP");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'api_key': opts['apiKey'],
        'html': opts['html'],
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
      var returnType = ListingVDP;

      return this.apiClient.callApi(
        '/listing/{id}/vdp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSummaryReport operation.
     * @callback module:api/ListingsApi~getSummaryReportCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VinReport>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Summary Report
     * [MOCK] Generate Summary report
     * @param {String} vin VIN as a reference to the type of car for which Summary data is to be returned
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The API Authentication Key. Mandatory with all API calls.
     * @param {module:api/ListingsApi~getSummaryReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VinReport>}
     */
    this.getSummaryReport = function(vin, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'vin' is set
      if (vin === undefined || vin === null) {
        throw new Error("Missing the required parameter 'vin' when calling getSummaryReport");
      }


      var pathParams = {
      };
      var queryParams = {
        'api_key': opts['apiKey'],
        'vin': vin,
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
      var returnType = [VinReport];

      return this.apiClient.callApi(
        '/vin_report_summary', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/ListingsApi~searchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets active car listings for the given search criteria
     * This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 1000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom/msrp for your search
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The API Authentication Key. Mandatory with all API calls.
     * @param {Number} opts.latitude Latitude component of location
     * @param {Number} opts.longitude Longitude component of location
     * @param {Number} opts.radius Radius around the search location
     * @param {module:model/String} opts.carType Car type. Allowed values are - new / used / certified
     * @param {String} opts.sellerType Seller type to filter cars on. Valid filter values are those that our Search facets API returns for unique seller types. You can pass in multiple seller type values comma separated.
     * @param {String} opts.year Car year - 1980 onwards. Valid filter values are those that our Search facets API returns for unique years. You can pass in multiple year values comma separated.
     * @param {String} opts.make Car Make - should be a standard OEM Make name. Valid filter values are those that our Search facets API returns for unique make. You can pass in multiple make values separated by comma. e.g. ford,audi
     * @param {String} opts.model Car model to search. Valid filter values are those that our Search facets API returns for unique model. You can pass in multiple model values comma separated for e.g f-150,Mustang.
     * @param {String} opts.trim Car trim to search. Valid filter values are those that our Search facets API returns for unique trim. You can pass in multiple trim values comma separated
     * @param {String} opts.dealerId Dealer id to filter the cars.
     * @param {String} opts.vin Car vin to search
     * @param {String} opts.source Source to search cars. Valid filter values are those that our Search facets API returns for unique source. You can pass in multiple source values comma separated
     * @param {String} opts.bodyType Body type to filter the cars on. Valid filter values are those that our Search facets API returns for unique body types. You can pass in multiple body types comma separated.
     * @param {String} opts.bodySubtype Body subtype to filter the cars on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
     * @param {String} opts.vehicleType Vehicle type to filter the cars on. Valid filter values are those that our Search facets API returns for unique vehicle types. You can pass in multiple vehicle type values comma separated
     * @param {String} opts.vins Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc
     * @param {String} opts.taxonomyVins Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.
     * @param {String} opts.ymmt Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe &#39;|&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - &#39;year|make||&#39; or &#39;year|make|model&#39; or &#39;|make|model|&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the &#39;vins&#39; or &#39;taxonomy_vins&#39; parameter to the search api instead the year|make|model|trim combinations.
     * @param {String} opts.match Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match
     * @param {String} opts.cylinders Cylinders to filter the cars on. Valid filter values are those that our Search facets API returns for unique cylinder values. You can pass in multiple cylinder values comma separated
     * @param {String} opts.transmission Transmission to filter the cars on. [a &#x3D; Automatic, m &#x3D; Manual]. Valid filter values are those that our Search facets API returns for unique transmission. You can pass in multiple transmission values comma separated
     * @param {String} opts.speeds Speeds to filter the cars on. Valid filter values are those that our Search facets API returns for unique speeds. You can pass in multiple speeds values comma separated
     * @param {String} opts.doors Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated
     * @param {String} opts.drivetrain Drivetrain to filter the cars on. Valid filter values are those that our Search facets API returns for unique drivetrains. You can pass in multiple drivetrain values comma separated
     * @param {String} opts.exteriorColor Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated
     * @param {String} opts.interiorColor Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
     * @param {String} opts.engine Filter listings on engine
     * @param {String} opts.engineType Engine Type to match. Valid filter values are those that our Search facets API returns for unique engine types. You can pass in multiple engine type values comma separated
     * @param {String} opts.engineAspiration Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
     * @param {String} opts.engineBlock Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
     * @param {String} opts.milesRange Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
     * @param {String} opts.priceRange Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
     * @param {String} opts.domRange Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     * @param {String} opts.sortBy Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
     * @param {String} opts.sortOrder Sort order - asc or desc. Default sort order is distance from a point.
     * @param {Number} opts.rows Number of results to return. Default is 10. Max is 50
     * @param {Number} opts.start Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows
     * @param {String} opts.facets The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_type, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
     * @param {String} opts.stats The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
     * @param {String} opts.country Filter on Country, by default US. Search available on US (United States) and CA (Canada)
     * @param {String} opts.plot If plot has value true results in around 25k coordinates with limited fields to plot respective graph
     * @param {String} opts.nodedup If nodedup is set to true then will give results using is_searchable
     * @param {String} opts.state Filter listsings on State
     * @param {String} opts.city Filter listings on city
     * @param {String} opts.dealerName Filter listings on dealer_name
     * @param {String} opts.trimO Filter listings on web scraped trim
     * @param {String} opts.trimR Filter trim on custom possible matches
     * @param {String} opts.domActiveRange Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     * @param {String} opts.dom180Range Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     * @param {String} opts.options Tokenizer search on options for multiple options use | as seperator
     * @param {String} opts.features Tokenizer search on features for multiple options use | as seperator
     * @param {module:api/ListingsApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchResponse}
     */
    this.search = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'api_key': opts['apiKey'],
        'latitude': opts['latitude'],
        'longitude': opts['longitude'],
        'radius': opts['radius'],
        'car_type': opts['carType'],
        'seller_type': opts['sellerType'],
        'year': opts['year'],
        'make': opts['make'],
        'model': opts['model'],
        'trim': opts['trim'],
        'dealer_id': opts['dealerId'],
        'vin': opts['vin'],
        'source': opts['source'],
        'body_type': opts['bodyType'],
        'body_subtype': opts['bodySubtype'],
        'vehicle_type': opts['vehicleType'],
        'vins': opts['vins'],
        'taxonomy_vins': opts['taxonomyVins'],
        'ymmt': opts['ymmt'],
        'match': opts['match'],
        'cylinders': opts['cylinders'],
        'transmission': opts['transmission'],
        'speeds': opts['speeds'],
        'doors': opts['doors'],
        'drivetrain': opts['drivetrain'],
        'exterior_color': opts['exteriorColor'],
        'interior_color': opts['interiorColor'],
        'engine': opts['engine'],
        'engine_type': opts['engineType'],
        'engine_aspiration': opts['engineAspiration'],
        'engine_block': opts['engineBlock'],
        'miles_range': opts['milesRange'],
        'price_range': opts['priceRange'],
        'dom_range': opts['domRange'],
        'sort_by': opts['sortBy'],
        'sort_order': opts['sortOrder'],
        'rows': opts['rows'],
        'start': opts['start'],
        'facets': opts['facets'],
        'stats': opts['stats'],
        'country': opts['country'],
        'plot': opts['plot'],
        'nodedup': opts['nodedup'],
        'state': opts['state'],
        'city': opts['city'],
        'dealer_name': opts['dealerName'],
        'trim_o': opts['trimO'],
        'trim_r': opts['trimR'],
        'dom_active_range': opts['domActiveRange'],
        'dom_180_range': opts['dom180Range'],
        'options': opts['options'],
        'features': opts['features'],
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
      var returnType = SearchResponse;

      return this.apiClient.callApi(
        '/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
