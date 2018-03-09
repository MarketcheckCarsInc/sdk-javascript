# MarketcheckCarsApi.ListingsApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListing**](ListingsApi.md#getListing) | **GET** /listing/{id} | Listing by id
[**getListingExtra**](ListingsApi.md#getListingExtra) | **GET** /listing/{id}/extra | Long text Listings attributes for Listing with the given id
[**getListingMedia**](ListingsApi.md#getListingMedia) | **GET** /listing/{id}/media | Listing media by id
[**getListingVDP**](ListingsApi.md#getListingVDP) | **GET** /listing/{id}/vdp | Get listing HTML
[**getSummaryReport**](ListingsApi.md#getSummaryReport) | **GET** /vin_report_summary | Get Summary Report
[**search**](ListingsApi.md#search) | **GET** /search | Gets active car listings for the given search criteria


<a name="getListing"></a>
# **getListing**
> Listing getListing(id, opts)

Listing by id

Get a particular listing by its id

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.ListingsApi();

var id = "id_example"; // String | Listing id to get all the listing attributes

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListing(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Listing id to get all the listing attributes | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**Listing**](Listing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getListingExtra"></a>
# **getListingExtra**
> ListingExtraAttributes getListingExtra(id, opts)

Long text Listings attributes for Listing with the given id

Get listing options, features, seller comments

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.ListingsApi();

var id = "id_example"; // String | Listing id to get all the long text listing attributes

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListingExtra(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Listing id to get all the long text listing attributes | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingExtraAttributes**](ListingExtraAttributes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getListingMedia"></a>
# **getListingMedia**
> ListingMedia getListingMedia(id, opts)

Listing media by id

Get listing media (photo, photos) by id

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.ListingsApi();

var id = "id_example"; // String | Listing id to get all the listing attributes

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListingMedia(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Listing id to get all the listing attributes | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingMedia**](ListingMedia.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getListingVDP"></a>
# **getListingVDP**
> ListingVDP getListingVDP(id, opts)

Get listing HTML

Cached HTML of the Vehicle Details Page (VDP) for the listing. The HTML is cached only for 7 days for all listings. So this API could be used to get HTML of mostly active listings and that have recently expired

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.ListingsApi();

var id = "id_example"; // String | Listing id to get the vehicle details page (VDP) HTML

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'html': "html_example" // String | Get only HTML for given listings VDP page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListingVDP(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Listing id to get the vehicle details page (VDP) HTML | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **html** | **String**| Get only HTML for given listings VDP page | [optional] 

### Return type

[**ListingVDP**](ListingVDP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSummaryReport"></a>
# **getSummaryReport**
> [VinReport] getSummaryReport(vin, opts)

Get Summary Report

[MOCK] Generate Summary report

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.ListingsApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which Summary data is to be returned

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSummaryReport(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which Summary data is to be returned | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**[VinReport]**](VinReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="search"></a>
# **search**
> SearchResponse search(opts)

Gets active car listings for the given search criteria

This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 1000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom/msrp for your search

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.ListingsApi();

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'latitude': 1.2, // Number | Latitude component of location
  'longitude': 1.2, // Number | Longitude component of location
  'radius': 56, // Number | Radius around the search location
  'carType': "carType_example", // String | Car type. Allowed values are - new / used / certified
  'sellerType': "sellerType_example", // String | Seller type to filter cars on. Valid filter values are those that our Search facets API returns for unique seller types. You can pass in multiple seller type values comma separated.
  'year': "year_example", // String | Car year - 1980 onwards. Valid filter values are those that our Search facets API returns for unique years. You can pass in multiple year values comma separated.
  'make': "make_example", // String | Car Make - should be a standard OEM Make name. Valid filter values are those that our Search facets API returns for unique make. You can pass in multiple make values separated by comma. e.g. ford,audi
  'model': "model_example", // String | Car model to search. Valid filter values are those that our Search facets API returns for unique model. You can pass in multiple model values comma separated for e.g f-150,Mustang.
  'trim': "trim_example", // String | Car trim to search. Valid filter values are those that our Search facets API returns for unique trim. You can pass in multiple trim values comma separated
  'dealerId': "dealerId_example", // String | Dealer id to filter the cars.
  'vin': "vin_example", // String | Car vin to search
  'source': "source_example", // String | Source to search cars. Valid filter values are those that our Search facets API returns for unique source. You can pass in multiple source values comma separated
  'bodyType': "bodyType_example", // String | Body type to filter the cars on. Valid filter values are those that our Search facets API returns for unique body types. You can pass in multiple body types comma separated.
  'bodySubtype': "bodySubtype_example", // String | Body subtype to filter the cars on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
  'vehicleType': "vehicleType_example", // String | Vehicle type to filter the cars on. Valid filter values are those that our Search facets API returns for unique vehicle types. You can pass in multiple vehicle type values comma separated
  'vins': "vins_example", // String | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc
  'taxonomyVins': "taxonomyVins_example", // String | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.
  'ymmt': "ymmt_example", // String | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations.
  'match': "match_example", // String | Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match
  'cylinders': "cylinders_example", // String | Cylinders to filter the cars on. Valid filter values are those that our Search facets API returns for unique cylinder values. You can pass in multiple cylinder values comma separated
  'transmission': "transmission_example", // String | Transmission to filter the cars on. [a = Automatic, m = Manual]. Valid filter values are those that our Search facets API returns for unique transmission. You can pass in multiple transmission values comma separated
  'speeds': "speeds_example", // String | Speeds to filter the cars on. Valid filter values are those that our Search facets API returns for unique speeds. You can pass in multiple speeds values comma separated
  'doors': "doors_example", // String | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated
  'drivetrain': "drivetrain_example", // String | Drivetrain to filter the cars on. Valid filter values are those that our Search facets API returns for unique drivetrains. You can pass in multiple drivetrain values comma separated
  'exteriorColor': "exteriorColor_example", // String | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated
  'interiorColor': "interiorColor_example", // String | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
  'engine': "engine_example", // String | Filter listings on engine
  'engineType': "engineType_example", // String | Engine Type to match. Valid filter values are those that our Search facets API returns for unique engine types. You can pass in multiple engine type values comma separated
  'engineAspiration': "engineAspiration_example", // String | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
  'engineBlock': "engineBlock_example", // String | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
  'milesRange': "milesRange_example", // String | Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
  'priceRange': "priceRange_example", // String | Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
  'domRange': "domRange_example", // String | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  'sortBy': "sortBy_example", // String | Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
  'sortOrder': "sortOrder_example", // String | Sort order - asc or desc. Default sort order is distance from a point.
  'rows': 56, // Number | Number of results to return. Default is 10. Max is 50
  'start': 56, // Number | Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows
  'facets': "facets_example", // String | The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_type, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
  'stats': "stats_example", // String | The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
  'country': "country_example", // String | Filter on Country, by default US. Search available on US (United States) and CA (Canada)
  'plot': "plot_example", // String | If plot has value true results in around 25k coordinates with limited fields to plot respective graph
  'nodedup': "nodedup_example", // String | If nodedup is set to true then will give results using is_searchable
  'state': "state_example", // String | Filter listsings on State
  'city': "city_example", // String | Filter listings on city
  'dealerName': "dealerName_example", // String | Filter listings on dealer_name
  'trimO': "trimO_example", // String | Filter listings on web scraped trim
  'trimR': "trimR_example", // String | Filter trim on custom possible matches
  'domActiveRange': "domActiveRange_example", // String | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  'dom180Range': "dom180Range_example", // String | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
  'options': "options_example", // String | Tokenizer search on options for multiple options use | as seperator
  'features': "features_example" // String | Tokenizer search on features for multiple options use | as seperator
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.search(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **latitude** | **Number**| Latitude component of location | [optional] 
 **longitude** | **Number**| Longitude component of location | [optional] 
 **radius** | **Number**| Radius around the search location | [optional] 
 **carType** | **String**| Car type. Allowed values are - new / used / certified | [optional] 
 **sellerType** | **String**| Seller type to filter cars on. Valid filter values are those that our Search facets API returns for unique seller types. You can pass in multiple seller type values comma separated. | [optional] 
 **year** | **String**| Car year - 1980 onwards. Valid filter values are those that our Search facets API returns for unique years. You can pass in multiple year values comma separated. | [optional] 
 **make** | **String**| Car Make - should be a standard OEM Make name. Valid filter values are those that our Search facets API returns for unique make. You can pass in multiple make values separated by comma. e.g. ford,audi | [optional] 
 **model** | **String**| Car model to search. Valid filter values are those that our Search facets API returns for unique model. You can pass in multiple model values comma separated for e.g f-150,Mustang. | [optional] 
 **trim** | **String**| Car trim to search. Valid filter values are those that our Search facets API returns for unique trim. You can pass in multiple trim values comma separated | [optional] 
 **dealerId** | **String**| Dealer id to filter the cars. | [optional] 
 **vin** | **String**| Car vin to search | [optional] 
 **source** | **String**| Source to search cars. Valid filter values are those that our Search facets API returns for unique source. You can pass in multiple source values comma separated | [optional] 
 **bodyType** | **String**| Body type to filter the cars on. Valid filter values are those that our Search facets API returns for unique body types. You can pass in multiple body types comma separated. | [optional] 
 **bodySubtype** | **String**| Body subtype to filter the cars on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicleType** | **String**| Vehicle type to filter the cars on. Valid filter values are those that our Search facets API returns for unique vehicle types. You can pass in multiple vehicle type values comma separated | [optional] 
 **vins** | **String**| Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | [optional] 
 **taxonomyVins** | **String**| Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | [optional] 
 **ymmt** | **String**| Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe &#39;|&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - &#39;year|make||&#39; or &#39;year|make|model&#39; or &#39;|make|model|&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the &#39;vins&#39; or &#39;taxonomy_vins&#39; parameter to the search api instead the year|make|model|trim combinations. | [optional] 
 **match** | **String**| Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match | [optional] 
 **cylinders** | **String**| Cylinders to filter the cars on. Valid filter values are those that our Search facets API returns for unique cylinder values. You can pass in multiple cylinder values comma separated | [optional] 
 **transmission** | **String**| Transmission to filter the cars on. [a &#x3D; Automatic, m &#x3D; Manual]. Valid filter values are those that our Search facets API returns for unique transmission. You can pass in multiple transmission values comma separated | [optional] 
 **speeds** | **String**| Speeds to filter the cars on. Valid filter values are those that our Search facets API returns for unique speeds. You can pass in multiple speeds values comma separated | [optional] 
 **doors** | **String**| Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | [optional] 
 **drivetrain** | **String**| Drivetrain to filter the cars on. Valid filter values are those that our Search facets API returns for unique drivetrains. You can pass in multiple drivetrain values comma separated | [optional] 
 **exteriorColor** | **String**| Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | [optional] 
 **interiorColor** | **String**| Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | [optional] 
 **engine** | **String**| Filter listings on engine | [optional] 
 **engineType** | **String**| Engine Type to match. Valid filter values are those that our Search facets API returns for unique engine types. You can pass in multiple engine type values comma separated | [optional] 
 **engineAspiration** | **String**| Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | [optional] 
 **engineBlock** | **String**| Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | [optional] 
 **milesRange** | **String**| Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **priceRange** | **String**| Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **domRange** | **String**| Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **sortBy** | **String**| Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point | [optional] 
 **sortOrder** | **String**| Sort order - asc or desc. Default sort order is distance from a point. | [optional] 
 **rows** | **Number**| Number of results to return. Default is 10. Max is 50 | [optional] 
 **start** | **Number**| Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows | [optional] 
 **facets** | **String**| The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_type, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **stats** | **String**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 
 **country** | **String**| Filter on Country, by default US. Search available on US (United States) and CA (Canada) | [optional] 
 **plot** | **String**| If plot has value true results in around 25k coordinates with limited fields to plot respective graph | [optional] 
 **nodedup** | **String**| If nodedup is set to true then will give results using is_searchable | [optional] 
 **state** | **String**| Filter listsings on State | [optional] 
 **city** | **String**| Filter listings on city | [optional] 
 **dealerName** | **String**| Filter listings on dealer_name | [optional] 
 **trimO** | **String**| Filter listings on web scraped trim | [optional] 
 **trimR** | **String**| Filter trim on custom possible matches | [optional] 
 **domActiveRange** | **String**| Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **dom180Range** | **String**| Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **options** | **String**| Tokenizer search on options for multiple options use | as seperator | [optional] 
 **features** | **String**| Tokenizer search on features for multiple options use | as seperator | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

