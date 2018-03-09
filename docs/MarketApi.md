# MarketcheckCarsApi.MarketApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAverages**](MarketApi.md#getAverages) | **GET** /averages | [MOCK] Get Averages for YMM
[**getComparison**](MarketApi.md#getComparison) | **GET** /comparison | Compare market
[**getCompetition**](MarketApi.md#getCompetition) | **GET** /competition | Competitors
[**getDepreciation**](MarketApi.md#getDepreciation) | **GET** /depreciation | Depreciation
[**getMDS**](MarketApi.md#getMDS) | **GET** /mds | Market Days Supply
[**getPopularity**](MarketApi.md#getPopularity) | **GET** /popularity | Popularity
[**getTrends**](MarketApi.md#getTrends) | **GET** /trends | Get Trends for criteria


<a name="getAverages"></a>
# **getAverages**
> Averages getAverages(vin, opts)

[MOCK] Get Averages for YMM

[Merged with the /search API - Please check the &#39;stats&#39; parameter to the Search API above] Get market averages for price / miles / msrp / dom (days on market) fields for active cars matching the given reference VIN&#39;s basic specification or Year, Make, Model, Trim (Optional) criteria

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.MarketApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which averages data is to be returned

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'year': "year_example", // String | Year of the car
  'make': "make_example", // String | Make of the car
  'model': "model_example", // String | Model of the Car
  'trim': "trim_example", // String | Trim of the Car
  'fields': "fields_example" // String | Comma separated list of fields to generate stats for. Allowed fields in the list are - price, miles, msrp, dom (days on market)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAverages(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which averages data is to be returned | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **year** | **String**| Year of the car | [optional] 
 **make** | **String**| Make of the car | [optional] 
 **model** | **String**| Model of the Car | [optional] 
 **trim** | **String**| Trim of the Car | [optional] 
 **fields** | **String**| Comma separated list of fields to generate stats for. Allowed fields in the list are - price, miles, msrp, dom (days on market) | [optional] 

### Return type

[**Averages**](Averages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getComparison"></a>
# **getComparison**
> ComparisonPoint getComparison(vin, opts)

Compare market

[MOCK] Get historical market trends for cars matching the given VIN&#39;s basic specification or Year, Make, Model, Trim (Optional) criteria

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.MarketApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which comparison data is to be returned

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
apiInstance.getComparison(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which comparison data is to be returned | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ComparisonPoint**](ComparisonPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCompetition"></a>
# **getCompetition**
> CompetitorsPoint getCompetition(vin, opts)

Competitors

[MOCK] Competitor cars in market for current vin

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.MarketApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which competitors data is to be returned

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
apiInstance.getCompetition(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which competitors data is to be returned | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**CompetitorsPoint**](CompetitorsPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDepreciation"></a>
# **getDepreciation**
> DepreciationPoint getDepreciation(vin, opts)

Depreciation

[MOCK] Model resale value based on depreciation

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.MarketApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which Depreciation stats is to be returned

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
apiInstance.getDepreciation(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which Depreciation stats is to be returned | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**DepreciationPoint**](DepreciationPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMDS"></a>
# **getMDS**
> Mds getMDS(vin, opts)

Market Days Supply

Get the basic information on specifications for a car identified by a valid VIN

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.MarketApi();

var vin = "vin_example"; // String | VIN to decode

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'exact': "exact_example", // String | Exact parameter
  'latitude': 1.2, // Number | Latitude component of location
  'longitude': 1.2, // Number | Longitude component of location
  'radius': 56, // Number | Radius around the search location
  'debug': "debug_example", // String | Debug parameter
  'includeSold': "includeSold_example" // String | To fetch sold vins
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMDS(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN to decode | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **exact** | **String**| Exact parameter | [optional] 
 **latitude** | **Number**| Latitude component of location | [optional] 
 **longitude** | **Number**| Longitude component of location | [optional] 
 **radius** | **Number**| Radius around the search location | [optional] 
 **debug** | **String**| Debug parameter | [optional] 
 **includeSold** | **String**| To fetch sold vins | [optional] 

### Return type

[**Mds**](Mds.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPopularity"></a>
# **getPopularity**
> [PopularityItem] getPopularity(year, make, model, trim, bodyType, opts)

Popularity

[MOCK] [Merged with the /search API - Please check the &#39;popularity&#39; parameter to the Search API above] Get the Popularity for the given simple filter criteria (by given Year, Make, Model, Trim criteria)

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.MarketApi();

var year = "year_example"; // String | Year of the car

var make = "make_example"; // String | Make of the car

var model = "model_example"; // String | Model of the Car

var trim = "trim_example"; // String | Trim of the Car

var bodyType = "bodyType_example"; // String | Body type to filter the cars on. Valid values are the ones returned by body_type facets API call

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'stats': "stats_example" // String | The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPopularity(year, make, model, trim, bodyType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **String**| Year of the car | 
 **make** | **String**| Make of the car | 
 **model** | **String**| Model of the Car | 
 **trim** | **String**| Trim of the Car | 
 **bodyType** | **String**| Body type to filter the cars on. Valid values are the ones returned by body_type facets API call | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **stats** | **String**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 

### Return type

[**[PopularityItem]**](PopularityItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrends"></a>
# **getTrends**
> [TrendPoint] getTrends(vin, carType, opts)

Get Trends for criteria

Get historical market trends for cars matching the given VIN&#39;s basic specification or Year, Make, Model, Trim (Optional) criteria

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.MarketApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which trend data is to be returned

var carType = "carType_example"; // String | Car type. Allowed values are - new / used / certified

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'year': "year_example", // String | Year of the car
  'make': "make_example", // String | Make of the car
  'model': "model_example", // String | Model of the Car
  'trim': "trim_example" // String | Trim of the Car
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTrends(vin, carType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which trend data is to be returned | 
 **carType** | **String**| Car type. Allowed values are - new / used / certified | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **year** | **String**| Year of the car | [optional] 
 **make** | **String**| Make of the car | [optional] 
 **model** | **String**| Model of the Car | [optional] 
 **trim** | **String**| Trim of the Car | [optional] 

### Return type

[**[TrendPoint]**](TrendPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

