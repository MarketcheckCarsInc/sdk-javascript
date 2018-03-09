# MarketcheckCarsApi.GraphsApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPriceMilesPlotData**](GraphsApi.md#getPriceMilesPlotData) | **GET** /plots | Price, Miles plots data for given criteria


<a name="getPriceMilesPlotData"></a>
# **getPriceMilesPlotData**
> [PlotPoint] getPriceMilesPlotData(carType, opts)

Price, Miles plots data for given criteria

[DEPRECIATED Please check this in /search API using plot&#x3D;true]Get price, miles plot data for active cars matching the given VIN&#39;s basic specification or Year, Make, Model, Trim (Optional) criteria

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.GraphsApi();

var carType = "carType_example"; // String | Car type to get the scatter plot data for

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'vin': "vin_example", // String | VIN as a reference to the type of car for which plot data is to be returned
  'year': "year_example", // String | Year of the car
  'make': "make_example", // String | Make of the car
  'model': "model_example", // String | Model of the Car
  'trim': "trim_example", // String | Trim of the Car
  'rows': 56 // Number | Number of results to return. Default is 1000. Max is 10000
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPriceMilesPlotData(carType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carType** | **String**| Car type to get the scatter plot data for | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **vin** | **String**| VIN as a reference to the type of car for which plot data is to be returned | [optional] 
 **year** | **String**| Year of the car | [optional] 
 **make** | **String**| Make of the car | [optional] 
 **model** | **String**| Model of the Car | [optional] 
 **trim** | **String**| Trim of the Car | [optional] 
 **rows** | **Number**| Number of results to return. Default is 1000. Max is 10000 | [optional] 

### Return type

[**[PlotPoint]**](PlotPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

