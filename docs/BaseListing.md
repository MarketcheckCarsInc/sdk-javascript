# MarketcheckCarsApi.BaseListing

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier representing a specific listing from the Marketcheck database | [optional] 
**heading** | **String** | Listing title as displayed on the source website | [optional] 
**vin** | **String** | VIN for the car | [optional] 
**stockNo** | **String** | Stock no of the car | [optional] 
**price** | **String** | Asking price for the car | [optional] 
**miles** | **String** | Odometer reading / reported miles usage for the car | [optional] 
**inventoryType** | **String** | Inventory type of car | [optional] 
**lastSeenAt** | **Number** | Listing last seen at (most recent) timestamp | [optional] 
**lastSeenAtDate** | **String** | Listing last seen at (most recent) date | [optional] 
**scrapedAtDate** | **Number** | Listing first seen at first scraped date | [optional] 
**firstSeenAt** | **Number** | Listing first seen at first scraped timestamp | [optional] 
**firstSeenAtDate** | **String** | Listing first seen at first scraped date | [optional] 
**refPrice** | **String** | Last reported price for the car. If the asking price value is not or is available then the last_price could perhaps be used. last_price is the price for the car listed on the source website as of last_price_dt date | [optional] 
**refMiles** | **String** | Last Odometer reading / reported miles usage for the car. If the asking miles value is not or is available then the last_miles could perhaps be used. last_miles is the miles for the car listed on the source website as of last_miles_dt date | [optional] 
**refPriceDt** | **Number** | The date at which the last price was reported online. This is earlier to last_seen_date | [optional] 
**refMilesDt** | **Number** | The date at which the last miles was reported online. This is earlier to last_seen_date | [optional] 
**dom** | **Number** | Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car | [optional] 
**dom180** | **Number** | Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car | [optional] 
**domActive** | **Number** | Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car | [optional] 
**sellerType** | **String** | Seller type for the car | [optional] 
**exteriorColor** | **String** | Exterior color of the car | [optional] 
**interiorColor** | **String** | Interior color of the car | [optional] 
**vdpUrl** | **String** | Vehicle Details Page url of the specific car | [optional] 
**source** | **String** | Source domain of the listing | [optional] 
**media** | [**ListingMedia**](ListingMedia.md) | Car Media Attributes - main photo link/url and photo links | [optional] 
**build** | [**Build**](Build.md) |  | [optional] 
**dealer** | [**Dealer**](Dealer.md) |  | [optional] 
**isCertified** | **Number** | Certified car | [optional] 
**distance** | **Number** | Distance of the car&#39;s location from the specified user lcoation | [optional] 


