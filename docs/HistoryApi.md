# MarketcheckCarsApi.HistoryApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**history**](HistoryApi.md#history) | **GET** /history/{vin} | Get a cars online listing history


<a name="history"></a>
# **history**
> [HistoricalListing] history(vin, opts)

Get a cars online listing history

The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.HistoryApi();

var vin = "vin_example"; // String | The VIN to identify the car to fetch the listing history. Must be a valid 17 char VIN

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'fields': "fields_example", // String | List of fields to fetch, in case the default fields list in the response is to be trimmed down
  'rows': 56, // Number | Number of results to return. Default is 10. Max is 50
  'page': 8.14 // Number | Page number to fetch the results for the given criteria. Default is 1.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.history(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| The VIN to identify the car to fetch the listing history. Must be a valid 17 char VIN | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **fields** | **String**| List of fields to fetch, in case the default fields list in the response is to be trimmed down | [optional] 
 **rows** | **Number**| Number of results to return. Default is 10. Max is 50 | [optional] 
 **page** | **Number**| Page number to fetch the results for the given criteria. Default is 1. | [optional] 

### Return type

[**[HistoricalListing]**](HistoricalListing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

