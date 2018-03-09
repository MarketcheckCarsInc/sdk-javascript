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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Averages', 'model/BaseListing', 'model/Build', 'model/ComparisonPoint', 'model/CompetitorsCarDetails', 'model/CompetitorsPoint', 'model/CompetitorsSameCars', 'model/CompetitorsSimilarCars', 'model/Dealer', 'model/DealerLandingPage', 'model/DealerRating', 'model/DealerReview', 'model/DealersResponse', 'model/DepreciationPoint', 'model/DepreciationStats', 'model/Economy', 'model/Error', 'model/FacetItem', 'model/FuelEfficiency', 'model/HistoricalListing', 'model/Listing', 'model/ListingDebugAttributes', 'model/ListingExtraAttributes', 'model/ListingMedia', 'model/ListingVDP', 'model/Location', 'model/MakeModel', 'model/Mds', 'model/PlotPoint', 'model/PopularityItem', 'model/RatingComponents', 'model/ReviewComponents', 'model/SafetyRating', 'model/SearchResponse', 'model/TrendPoint', 'model/VinReport', 'api/DealerApi', 'api/FacetsApi', 'api/GraphsApi', 'api/HistoryApi', 'api/InventoryApi', 'api/ListingsApi', 'api/MarketApi', 'api/VINDecoderApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Averages'), require('./model/BaseListing'), require('./model/Build'), require('./model/ComparisonPoint'), require('./model/CompetitorsCarDetails'), require('./model/CompetitorsPoint'), require('./model/CompetitorsSameCars'), require('./model/CompetitorsSimilarCars'), require('./model/Dealer'), require('./model/DealerLandingPage'), require('./model/DealerRating'), require('./model/DealerReview'), require('./model/DealersResponse'), require('./model/DepreciationPoint'), require('./model/DepreciationStats'), require('./model/Economy'), require('./model/Error'), require('./model/FacetItem'), require('./model/FuelEfficiency'), require('./model/HistoricalListing'), require('./model/Listing'), require('./model/ListingDebugAttributes'), require('./model/ListingExtraAttributes'), require('./model/ListingMedia'), require('./model/ListingVDP'), require('./model/Location'), require('./model/MakeModel'), require('./model/Mds'), require('./model/PlotPoint'), require('./model/PopularityItem'), require('./model/RatingComponents'), require('./model/ReviewComponents'), require('./model/SafetyRating'), require('./model/SearchResponse'), require('./model/TrendPoint'), require('./model/VinReport'), require('./api/DealerApi'), require('./api/FacetsApi'), require('./api/GraphsApi'), require('./api/HistoryApi'), require('./api/InventoryApi'), require('./api/ListingsApi'), require('./api/MarketApi'), require('./api/VINDecoderApi'));
  }
}(function(ApiClient, Averages, BaseListing, Build, ComparisonPoint, CompetitorsCarDetails, CompetitorsPoint, CompetitorsSameCars, CompetitorsSimilarCars, Dealer, DealerLandingPage, DealerRating, DealerReview, DealersResponse, DepreciationPoint, DepreciationStats, Economy, Error, FacetItem, FuelEfficiency, HistoricalListing, Listing, ListingDebugAttributes, ListingExtraAttributes, ListingMedia, ListingVDP, Location, MakeModel, Mds, PlotPoint, PopularityItem, RatingComponents, ReviewComponents, SafetyRating, SearchResponse, TrendPoint, VinReport, DealerApi, FacetsApi, GraphsApi, HistoryApi, InventoryApi, ListingsApi, MarketApi, VINDecoderApi) {
  'use strict';

  /**
   * bAccess_the_New_Used_and_Certified_cars_inventories_for_all_Car_Dealers_in_US_b_brThe_data_is_sourced_from_online_listings_by_over_44000_Car_dealers_in_US__At_any_time_there_are_about_6_2M_searchable_listings__about_1_9M_unique_VINs_for_Used__Certified_cars_and_about_6_6M__about_3_9M_unique_VINs_New_Car_listings_from_all_over_US__We_use_this_API_at_the_back_for_our_website_a_hrefhttpswww_marketcheck_com_target_blankwww_marketcheck_coma_and_our_Android_and_iOS_mobile_apps_too_brh5_Few_useful_links__h5ulliA_quick_view_of_the_API_and_the_use_cases_is_depicated_a_hrefhttpsportals_marketcheck_commcapi_target_blankherealiliThe_Postman_collection_with_various_usages_of_the_API_is_shared_here_httpswww_getpostman_comcollections2752684ff636cdd7bac2liul.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MarketcheckCarsApi = require('index'); // See note below*.
   * var xxxSvc = new MarketcheckCarsApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new MarketcheckCarsApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new MarketcheckCarsApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new MarketcheckCarsApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.3
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Averages model constructor.
     * @property {module:model/Averages}
     */
    Averages: Averages,
    /**
     * The BaseListing model constructor.
     * @property {module:model/BaseListing}
     */
    BaseListing: BaseListing,
    /**
     * The Build model constructor.
     * @property {module:model/Build}
     */
    Build: Build,
    /**
     * The ComparisonPoint model constructor.
     * @property {module:model/ComparisonPoint}
     */
    ComparisonPoint: ComparisonPoint,
    /**
     * The CompetitorsCarDetails model constructor.
     * @property {module:model/CompetitorsCarDetails}
     */
    CompetitorsCarDetails: CompetitorsCarDetails,
    /**
     * The CompetitorsPoint model constructor.
     * @property {module:model/CompetitorsPoint}
     */
    CompetitorsPoint: CompetitorsPoint,
    /**
     * The CompetitorsSameCars model constructor.
     * @property {module:model/CompetitorsSameCars}
     */
    CompetitorsSameCars: CompetitorsSameCars,
    /**
     * The CompetitorsSimilarCars model constructor.
     * @property {module:model/CompetitorsSimilarCars}
     */
    CompetitorsSimilarCars: CompetitorsSimilarCars,
    /**
     * The Dealer model constructor.
     * @property {module:model/Dealer}
     */
    Dealer: Dealer,
    /**
     * The DealerLandingPage model constructor.
     * @property {module:model/DealerLandingPage}
     */
    DealerLandingPage: DealerLandingPage,
    /**
     * The DealerRating model constructor.
     * @property {module:model/DealerRating}
     */
    DealerRating: DealerRating,
    /**
     * The DealerReview model constructor.
     * @property {module:model/DealerReview}
     */
    DealerReview: DealerReview,
    /**
     * The DealersResponse model constructor.
     * @property {module:model/DealersResponse}
     */
    DealersResponse: DealersResponse,
    /**
     * The DepreciationPoint model constructor.
     * @property {module:model/DepreciationPoint}
     */
    DepreciationPoint: DepreciationPoint,
    /**
     * The DepreciationStats model constructor.
     * @property {module:model/DepreciationStats}
     */
    DepreciationStats: DepreciationStats,
    /**
     * The Economy model constructor.
     * @property {module:model/Economy}
     */
    Economy: Economy,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The FacetItem model constructor.
     * @property {module:model/FacetItem}
     */
    FacetItem: FacetItem,
    /**
     * The FuelEfficiency model constructor.
     * @property {module:model/FuelEfficiency}
     */
    FuelEfficiency: FuelEfficiency,
    /**
     * The HistoricalListing model constructor.
     * @property {module:model/HistoricalListing}
     */
    HistoricalListing: HistoricalListing,
    /**
     * The Listing model constructor.
     * @property {module:model/Listing}
     */
    Listing: Listing,
    /**
     * The ListingDebugAttributes model constructor.
     * @property {module:model/ListingDebugAttributes}
     */
    ListingDebugAttributes: ListingDebugAttributes,
    /**
     * The ListingExtraAttributes model constructor.
     * @property {module:model/ListingExtraAttributes}
     */
    ListingExtraAttributes: ListingExtraAttributes,
    /**
     * The ListingMedia model constructor.
     * @property {module:model/ListingMedia}
     */
    ListingMedia: ListingMedia,
    /**
     * The ListingVDP model constructor.
     * @property {module:model/ListingVDP}
     */
    ListingVDP: ListingVDP,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The MakeModel model constructor.
     * @property {module:model/MakeModel}
     */
    MakeModel: MakeModel,
    /**
     * The Mds model constructor.
     * @property {module:model/Mds}
     */
    Mds: Mds,
    /**
     * The PlotPoint model constructor.
     * @property {module:model/PlotPoint}
     */
    PlotPoint: PlotPoint,
    /**
     * The PopularityItem model constructor.
     * @property {module:model/PopularityItem}
     */
    PopularityItem: PopularityItem,
    /**
     * The RatingComponents model constructor.
     * @property {module:model/RatingComponents}
     */
    RatingComponents: RatingComponents,
    /**
     * The ReviewComponents model constructor.
     * @property {module:model/ReviewComponents}
     */
    ReviewComponents: ReviewComponents,
    /**
     * The SafetyRating model constructor.
     * @property {module:model/SafetyRating}
     */
    SafetyRating: SafetyRating,
    /**
     * The SearchResponse model constructor.
     * @property {module:model/SearchResponse}
     */
    SearchResponse: SearchResponse,
    /**
     * The TrendPoint model constructor.
     * @property {module:model/TrendPoint}
     */
    TrendPoint: TrendPoint,
    /**
     * The VinReport model constructor.
     * @property {module:model/VinReport}
     */
    VinReport: VinReport,
    /**
     * The DealerApi service constructor.
     * @property {module:api/DealerApi}
     */
    DealerApi: DealerApi,
    /**
     * The FacetsApi service constructor.
     * @property {module:api/FacetsApi}
     */
    FacetsApi: FacetsApi,
    /**
     * The GraphsApi service constructor.
     * @property {module:api/GraphsApi}
     */
    GraphsApi: GraphsApi,
    /**
     * The HistoryApi service constructor.
     * @property {module:api/HistoryApi}
     */
    HistoryApi: HistoryApi,
    /**
     * The InventoryApi service constructor.
     * @property {module:api/InventoryApi}
     */
    InventoryApi: InventoryApi,
    /**
     * The ListingsApi service constructor.
     * @property {module:api/ListingsApi}
     */
    ListingsApi: ListingsApi,
    /**
     * The MarketApi service constructor.
     * @property {module:api/MarketApi}
     */
    MarketApi: MarketApi,
    /**
     * The VINDecoderApi service constructor.
     * @property {module:api/VINDecoderApi}
     */
    VINDecoderApi: VINDecoderApi
  };

  return exports;
}));