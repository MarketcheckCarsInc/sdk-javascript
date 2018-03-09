# MarketcheckCarsApi.Listing

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**heading** | **String** | Listing heading | [optional] 
**vin** | **String** | VIN for the car | [optional] 
**stockNo** | **String** | Stock no of the car | [optional] 
**price** | **String** | Asking price for the car | [optional] 
**msrp** | **String** | MSRP for the car | [optional] 
**miles** | **String** | Odometer reading / reported miles usage for the car | [optional] 
**inventoryType** | **String** | Inventory type of car | [optional] 
**scrapedAtDate** | **Number** | Listing first seen at first scraped date | [optional] 
**firstSeenAt** | **Number** | Listing first seen at first scraped timestamp | [optional] 
**firstSeenAtDate** | **String** | Listing first seen at first scraped date | [optional] 
**vdpUrl** | **String** | Vehicle Details Page url of the specific car | [optional] 
**source** | **String** | Source domain of the listing | [optional] 
**isCertified** | **Number** | Flag indicating whether the car is Certified | [optional] 
**dom** | **Number** | Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car | [optional] 
**dom180** | **Number** | Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car | [optional] 
**domActive** | **Number** | Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] 
**sellerType** | **String** | Seller type for the car | [optional] 
**lastSeenAt** | **Number** | Listing last seen at (most recent) timestamp | [optional] 
**lastSeenAtDate** | **String** | Listing last seen at (most recent) date | [optional] 
**build** | [**Build**](Build.md) | Build / Specifications attributes | [optional] 
**media** | [**ListingMedia**](ListingMedia.md) | Car Media Attributes - main photo link/url and photo links | [optional] 
**extra** | [**ListingExtraAttributes**](ListingExtraAttributes.md) | Extra attributes for the listing - options, features, seller comments etc | [optional] 
**dealer** | [**Dealer**](Dealer.md) |  | [optional] 
**carLocation** | [**Location**](Location.md) | Car location data. Included only if its a different location to the dealers location | [optional] 


