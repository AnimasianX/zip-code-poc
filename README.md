# zip-code-poc

### Meteor App to find distance between two zip codes 

### TODO
1. get the user’s location (you should be able to use `navigator.geolocation.getCurrentPosition()`). You should be able to get a zip code out of this using `position.address.postalCode`
2. given a list of US zipcodes, get the estimated distance between the user and each zipcode.
3. Finally:
    1. Add a slider to determine a “radius” from the user.
    2. Filter the zipcodes by the radius. In other words, if the distance between the user and the zipcode is larger than the radius, don’t show the zipcode.
