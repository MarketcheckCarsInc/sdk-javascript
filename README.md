# marketcheck_cars_api

MarketcheckCarsApi - JavaScript client for marketcheck_cars_api
<b>Access the New, Used and Certified cars inventories for all Car Dealers in US.</b> <br/>The data is sourced from online listings by over 44,000 Car dealers in US. At any time, there are about 6.2M searchable listings (about 1.9M unique VINs) for Used & Certified cars and about 6.6M (about 3.9M unique VINs) New Car listings from all over US. We use this API at the back for our website <a href='https://www.marketcheck.com' target='_blank'>www.marketcheck.com</a> and our Android and iOS mobile apps too.<br/><h5> Few useful links : </h5><ul><li>A quick view of the API and the use cases is depicated <a href='https://portals.marketcheck.com/mcapi/' target='_blank'>here</a></li><li>The Postman collection with various usages of the API is shared here https://www.getpostman.com/collections/2752684ff636cdd7bac2</li></ul>
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.3
- Package version: 1.0.3
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install marketcheck_cars_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your marketcheck_cars_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('marketcheck_cars_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var api = new MarketcheckCarsApi.DealerApi()

var latitude = 1.2; // {Number} Latitude component of location

var longitude = 1.2; // {Number} Longitude component of location

var radius = 56; // {Number} Radius around the search location

var opts = { 
  'apiKey': "apiKey_example", // {String} The API Authentication Key. Mandatory with all API calls.
  'rows': 50, // {Number} Number of results to return. Default is 10. Max is 50
  'start': 1 // {Number} Offset for the search results. Default is 1.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.dealerSearch(latitude, longitude, radius, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MarketcheckCarsApi.DealerApi* | [**dealerSearch**](docs/DealerApi.md#dealerSearch) | **GET** /dealers | Find car dealers around
*MarketcheckCarsApi.DealerApi* | [**getDealer**](docs/DealerApi.md#getDealer) | **GET** /dealer/{dealer_id} | Dealer by id
*MarketcheckCarsApi.DealerApi* | [**getDealerActiveInventory**](docs/DealerApi.md#getDealerActiveInventory) | **GET** /dealer/{dealer_id}/active/inventory | Dealer inventory
*MarketcheckCarsApi.DealerApi* | [**getDealerHistoricalInventory**](docs/DealerApi.md#getDealerHistoricalInventory) | **GET** /dealer/{dealer_id}/historical/inventory | Dealer&#39;s historical inventory
*MarketcheckCarsApi.DealerApi* | [**getDealerLandingPage**](docs/DealerApi.md#getDealerLandingPage) | **GET** /dealer/{dealer_id}/landing | Experimental: Get cached version of dealer landing page by dealer id
*MarketcheckCarsApi.DealerApi* | [**getDealerRatings**](docs/DealerApi.md#getDealerRatings) | **GET** /dealer/{dealer_id}/ratings | Dealer&#39;s Rating
*MarketcheckCarsApi.DealerApi* | [**getDealerReviews**](docs/DealerApi.md#getDealerReviews) | **GET** /dealer/{dealer_id}/reviews | Dealer&#39;s Review
*MarketcheckCarsApi.FacetsApi* | [**getFacets**](docs/FacetsApi.md#getFacets) | **GET** /facets | Facets
*MarketcheckCarsApi.GraphsApi* | [**getPriceMilesPlotData**](docs/GraphsApi.md#getPriceMilesPlotData) | **GET** /plots | Price, Miles plots data for given criteria
*MarketcheckCarsApi.HistoryApi* | [**history**](docs/HistoryApi.md#history) | **GET** /history/{vin} | Get a cars online listing history
*MarketcheckCarsApi.InventoryApi* | [**getDealerActiveInventory**](docs/InventoryApi.md#getDealerActiveInventory) | **GET** /dealer/{dealer_id}/active/inventory | Dealer inventory
*MarketcheckCarsApi.InventoryApi* | [**getDealerHistoricalInventory**](docs/InventoryApi.md#getDealerHistoricalInventory) | **GET** /dealer/{dealer_id}/historical/inventory | Dealer&#39;s historical inventory
*MarketcheckCarsApi.ListingsApi* | [**getListing**](docs/ListingsApi.md#getListing) | **GET** /listing/{id} | Listing by id
*MarketcheckCarsApi.ListingsApi* | [**getListingExtra**](docs/ListingsApi.md#getListingExtra) | **GET** /listing/{id}/extra | Long text Listings attributes for Listing with the given id
*MarketcheckCarsApi.ListingsApi* | [**getListingMedia**](docs/ListingsApi.md#getListingMedia) | **GET** /listing/{id}/media | Listing media by id
*MarketcheckCarsApi.ListingsApi* | [**getListingVDP**](docs/ListingsApi.md#getListingVDP) | **GET** /listing/{id}/vdp | Get listing HTML
*MarketcheckCarsApi.ListingsApi* | [**getSummaryReport**](docs/ListingsApi.md#getSummaryReport) | **GET** /vin_report_summary | Get Summary Report
*MarketcheckCarsApi.ListingsApi* | [**search**](docs/ListingsApi.md#search) | **GET** /search | Gets active car listings for the given search criteria
*MarketcheckCarsApi.MarketApi* | [**getAverages**](docs/MarketApi.md#getAverages) | **GET** /averages | [MOCK] Get Averages for YMM
*MarketcheckCarsApi.MarketApi* | [**getComparison**](docs/MarketApi.md#getComparison) | **GET** /comparison | Compare market
*MarketcheckCarsApi.MarketApi* | [**getCompetition**](docs/MarketApi.md#getCompetition) | **GET** /competition | Competitors
*MarketcheckCarsApi.MarketApi* | [**getDepreciation**](docs/MarketApi.md#getDepreciation) | **GET** /depreciation | Depreciation
*MarketcheckCarsApi.MarketApi* | [**getMDS**](docs/MarketApi.md#getMDS) | **GET** /mds | Market Days Supply
*MarketcheckCarsApi.MarketApi* | [**getPopularity**](docs/MarketApi.md#getPopularity) | **GET** /popularity | Popularity
*MarketcheckCarsApi.MarketApi* | [**getTrends**](docs/MarketApi.md#getTrends) | **GET** /trends | Get Trends for criteria
*MarketcheckCarsApi.VINDecoderApi* | [**decode**](docs/VINDecoderApi.md#decode) | **GET** /vin/{vin}/specs | VIN Decoder
*MarketcheckCarsApi.VINDecoderApi* | [**getEconomy**](docs/VINDecoderApi.md#getEconomy) | **GET** /economy | Get Economy based on environmental factors
*MarketcheckCarsApi.VINDecoderApi* | [**getEfficiency**](docs/VINDecoderApi.md#getEfficiency) | **GET** /fuel_efficiency | Get fuel effeciency
*MarketcheckCarsApi.VINDecoderApi* | [**getSafetyRating**](docs/VINDecoderApi.md#getSafetyRating) | **GET** /safety | Get Safety Rating


## Documentation for Models

 - [MarketcheckCarsApi.Averages](docs/Averages.md)
 - [MarketcheckCarsApi.BaseListing](docs/BaseListing.md)
 - [MarketcheckCarsApi.Build](docs/Build.md)
 - [MarketcheckCarsApi.ComparisonPoint](docs/ComparisonPoint.md)
 - [MarketcheckCarsApi.CompetitorsCarDetails](docs/CompetitorsCarDetails.md)
 - [MarketcheckCarsApi.CompetitorsPoint](docs/CompetitorsPoint.md)
 - [MarketcheckCarsApi.CompetitorsSameCars](docs/CompetitorsSameCars.md)
 - [MarketcheckCarsApi.CompetitorsSimilarCars](docs/CompetitorsSimilarCars.md)
 - [MarketcheckCarsApi.Dealer](docs/Dealer.md)
 - [MarketcheckCarsApi.DealerLandingPage](docs/DealerLandingPage.md)
 - [MarketcheckCarsApi.DealerRating](docs/DealerRating.md)
 - [MarketcheckCarsApi.DealerReview](docs/DealerReview.md)
 - [MarketcheckCarsApi.DealersResponse](docs/DealersResponse.md)
 - [MarketcheckCarsApi.DepreciationPoint](docs/DepreciationPoint.md)
 - [MarketcheckCarsApi.DepreciationStats](docs/DepreciationStats.md)
 - [MarketcheckCarsApi.Economy](docs/Economy.md)
 - [MarketcheckCarsApi.Error](docs/Error.md)
 - [MarketcheckCarsApi.FacetItem](docs/FacetItem.md)
 - [MarketcheckCarsApi.FuelEfficiency](docs/FuelEfficiency.md)
 - [MarketcheckCarsApi.HistoricalListing](docs/HistoricalListing.md)
 - [MarketcheckCarsApi.Listing](docs/Listing.md)
 - [MarketcheckCarsApi.ListingDebugAttributes](docs/ListingDebugAttributes.md)
 - [MarketcheckCarsApi.ListingExtraAttributes](docs/ListingExtraAttributes.md)
 - [MarketcheckCarsApi.ListingMedia](docs/ListingMedia.md)
 - [MarketcheckCarsApi.ListingVDP](docs/ListingVDP.md)
 - [MarketcheckCarsApi.Location](docs/Location.md)
 - [MarketcheckCarsApi.MakeModel](docs/MakeModel.md)
 - [MarketcheckCarsApi.Mds](docs/Mds.md)
 - [MarketcheckCarsApi.PlotPoint](docs/PlotPoint.md)
 - [MarketcheckCarsApi.PopularityItem](docs/PopularityItem.md)
 - [MarketcheckCarsApi.RatingComponents](docs/RatingComponents.md)
 - [MarketcheckCarsApi.ReviewComponents](docs/ReviewComponents.md)
 - [MarketcheckCarsApi.SafetyRating](docs/SafetyRating.md)
 - [MarketcheckCarsApi.SearchResponse](docs/SearchResponse.md)
 - [MarketcheckCarsApi.TrendPoint](docs/TrendPoint.md)
 - [MarketcheckCarsApi.VinReport](docs/VinReport.md)


## Documentation for Authorization

 All endpoints do not require authorization.

