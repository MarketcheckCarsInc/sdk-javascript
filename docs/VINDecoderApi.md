# MarketcheckCarsApi.VINDecoderApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decode**](VINDecoderApi.md#decode) | **GET** /vin/{vin}/specs | VIN Decoder
[**getEconomy**](VINDecoderApi.md#getEconomy) | **GET** /economy | Get Economy based on environmental factors
[**getEfficiency**](VINDecoderApi.md#getEfficiency) | **GET** /fuel_efficiency | Get fuel effeciency
[**getSafetyRating**](VINDecoderApi.md#getSafetyRating) | **GET** /safety | Get Safety Rating


<a name="decode"></a>
# **decode**
> Build decode(vin, opts)

VIN Decoder

Get the basic information on specifications for a car identified by a valid VIN

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.VINDecoderApi();

var vin = "vin_example"; // String | VIN to decode

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
apiInstance.decode(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN to decode | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**Build**](Build.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEconomy"></a>
# **getEconomy**
> Economy getEconomy(vin, opts)

Get Economy based on environmental factors

[MOCK] Calculate Economy i.e. Environmental Friendliness

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.VINDecoderApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which Environmental Economy data is to be returned

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
apiInstance.getEconomy(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which Environmental Economy data is to be returned | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**Economy**](Economy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEfficiency"></a>
# **getEfficiency**
> FuelEfficiency getEfficiency(vin, opts)

Get fuel effeciency

[MOCK] Calculate fuel efficiency from taxonomy db mileage values

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.VINDecoderApi();

var vin = "vin_example"; // String | VIN as a reference to the type of car for which fuel data is to be returned

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
apiInstance.getEfficiency(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN as a reference to the type of car for which fuel data is to be returned | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**FuelEfficiency**](FuelEfficiency.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSafetyRating"></a>
# **getSafetyRating**
> SafetyRating getSafetyRating(vin, opts)

Get Safety Rating

[MOCK] Get Safety ratings from third party sources

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.VINDecoderApi();

var vin = "vin_example"; // String | VIN to fetch the safety ratings

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
apiInstance.getSafetyRating(vin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vin** | **String**| VIN to fetch the safety ratings | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**SafetyRating**](SafetyRating.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

