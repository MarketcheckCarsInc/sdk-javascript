# MarketcheckCarsApi.InventoryApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDealerActiveInventory**](InventoryApi.md#getDealerActiveInventory) | **GET** /dealer/{dealer_id}/active/inventory | Dealer inventory
[**getDealerHistoricalInventory**](InventoryApi.md#getDealerHistoricalInventory) | **GET** /dealer/{dealer_id}/historical/inventory | Dealer&#39;s historical inventory


<a name="getDealerActiveInventory"></a>
# **getDealerActiveInventory**
> BaseListing getDealerActiveInventory(dealerId, opts)

Dealer inventory

Get a dealer&#39;s currently active inventory

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.InventoryApi();

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

var apiInstance = new MarketcheckCarsApi.InventoryApi();

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

