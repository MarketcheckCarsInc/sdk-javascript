# MarketcheckCarsApi.DealerApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealerSearch**](DealerApi.md#dealerSearch) | **GET** /dealers | Find car dealers around
[**getDealer**](DealerApi.md#getDealer) | **GET** /dealer/{dealer_id} | Dealer by id
[**getDealerActiveInventory**](DealerApi.md#getDealerActiveInventory) | **GET** /dealer/{dealer_id}/active/inventory | Dealer inventory
[**getDealerHistoricalInventory**](DealerApi.md#getDealerHistoricalInventory) | **GET** /dealer/{dealer_id}/historical/inventory | Dealer&#39;s historical inventory
[**getDealerLandingPage**](DealerApi.md#getDealerLandingPage) | **GET** /dealer/{dealer_id}/landing | Experimental: Get cached version of dealer landing page by dealer id
[**getDealerRatings**](DealerApi.md#getDealerRatings) | **GET** /dealer/{dealer_id}/ratings | Dealer&#39;s Rating
[**getDealerReviews**](DealerApi.md#getDealerReviews) | **GET** /dealer/{dealer_id}/reviews | Dealer&#39;s Review


<a name="dealerSearch"></a>
# **dealerSearch**
> DealersResponse dealerSearch(latitude, longitude, radius, opts)

Find car dealers around

The dealers API returns a list of dealers around a given point and radius. Max radius of only 50 miles is supported.

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.DealerApi();

var latitude = 1.2; // Number | Latitude component of location

var longitude = 1.2; // Number | Longitude component of location

var radius = 56; // Number | Radius around the search location

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'rows': 56, // Number | Number of results to return. Default is 10. Max is 50
  'start': 56 // Number | Offset for the search results. Default is 1.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dealerSearch(latitude, longitude, radius, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **Number**| Latitude component of location | 
 **longitude** | **Number**| Longitude component of location | 
 **radius** | **Number**| Radius around the search location | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **rows** | **Number**| Number of results to return. Default is 10. Max is 50 | [optional] 
 **start** | **Number**| Offset for the search results. Default is 1. | [optional] 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDealer"></a>
# **getDealer**
> Dealer getDealer(dealerId, opts)

Dealer by id

Get a particular dealer&#39;s information by its id

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.DealerApi();

var dealerId = "dealerId_example"; // String | Dealer id to get all the dealer info attributes

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
apiInstance.getDealer(dealerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealerId** | **String**| Dealer id to get all the dealer info attributes | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**Dealer**](Dealer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDealerActiveInventory"></a>
# **getDealerActiveInventory**
> BaseListing getDealerActiveInventory(dealerId, opts)

Dealer inventory

Get a dealer&#39;s currently active inventory

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.DealerApi();

var dealerId = "dealerId_example"; // String | Id representing the dealer to fetch the active inventory for

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'rows': 56, // Number | Number of results to return. Default is 10. Max is 50
  'start': 56 // Number | Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDealerActiveInventory(dealerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealerId** | **String**| Id representing the dealer to fetch the active inventory for | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **rows** | **Number**| Number of results to return. Default is 10. Max is 50 | [optional] 
 **start** | **Number**| Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows | [optional] 

### Return type

[**BaseListing**](BaseListing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDealerHistoricalInventory"></a>
# **getDealerHistoricalInventory**
> BaseListing getDealerHistoricalInventory(dealerId)

Dealer&#39;s historical inventory

[v1 : Not Implemented Yet] - Get a dealer&#39;s historical inventory

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.DealerApi();

var dealerId = "dealerId_example"; // String | Id representing the dealer to fetch the active inventory for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDealerHistoricalInventory(dealerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealerId** | **String**| Id representing the dealer to fetch the active inventory for | 

### Return type

[**BaseListing**](BaseListing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDealerLandingPage"></a>
# **getDealerLandingPage**
> DealerLandingPage getDealerLandingPage(dealerId, opts)

Experimental: Get cached version of dealer landing page by dealer id

Experimental: Get cached version of dealer landing page by dealer id

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.DealerApi();

var dealerId = "dealerId_example"; // String | Robot id to get the landing page html for

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
apiInstance.getDealerLandingPage(dealerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealerId** | **String**| Robot id to get the landing page html for | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**DealerLandingPage**](DealerLandingPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDealerRatings"></a>
# **getDealerRatings**
> DealerRating getDealerRatings(dealerId)

Dealer&#39;s Rating

[MOCK] Get a dealer&#39;s Rating

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.DealerApi();

var dealerId = "dealerId_example"; // String | Id representing the dealer to fetch the ratings for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDealerRatings(dealerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealerId** | **String**| Id representing the dealer to fetch the ratings for | 

### Return type

[**DealerRating**](DealerRating.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDealerReviews"></a>
# **getDealerReviews**
> DealerReview getDealerReviews(dealerId)

Dealer&#39;s Review

[MOCK] Get a dealer&#39;s Review

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.DealerApi();

var dealerId = "dealerId_example"; // String | Id representing the dealer to fetch the ratings for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDealerReviews(dealerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealerId** | **String**| Id representing the dealer to fetch the ratings for | 

### Return type

[**DealerReview**](DealerReview.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

