# MarketcheckCarsApi.FacetsApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFacets**](FacetsApi.md#getFacets) | **GET** /facets | Facets


<a name="getFacets"></a>
# **getFacets**
> [FacetItem] getFacets(fields, opts)

Facets

[Merged with the /search API - Please check the &#39;facets&#39; parameter to the Search API above] Get the facets for the given simple filter criteria (by given VIN&#39;s basic specification, Or by Year, Make, Model, Trim criteria) and facet fields

### Example
```javascript
var MarketcheckCarsApi = require('marketcheck_cars_api');

var apiInstance = new MarketcheckCarsApi.FacetsApi();

var fields = "fields_example"; // String | Comma separated list of fields to generate facets for. Supported fields are - year, make, model, trim, exterior_color, interior_color, drivetrain, vehicle_type, car_type, body_style, body_subtype, doors

var opts = { 
  'apiKey': "apiKey_example", // String | The API Authentication Key. Mandatory with all API calls.
  'vin': "vin_example", // String | VIN as a reference to the type of car for which facets data is to be returned
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
apiInstance.getFacets(fields, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fields** | **String**| Comma separated list of fields to generate facets for. Supported fields are - year, make, model, trim, exterior_color, interior_color, drivetrain, vehicle_type, car_type, body_style, body_subtype, doors | 
 **apiKey** | **String**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **vin** | **String**| VIN as a reference to the type of car for which facets data is to be returned | [optional] 
 **year** | **String**| Year of the car | [optional] 
 **make** | **String**| Make of the car | [optional] 
 **model** | **String**| Model of the Car | [optional] 
 **trim** | **String**| Trim of the Car | [optional] 

### Return type

[**[FacetItem]**](FacetItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

