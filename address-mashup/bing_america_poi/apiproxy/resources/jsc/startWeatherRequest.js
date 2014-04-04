/*
* Start an ASync request to get weather so that we can make another call and service
* two requests concurrently
*
* Wunderground request looks like:

http://api.openweathermap.org/data/2.1/find/city?lat=33.3062&lon=-111.841&radius=10

*/
var lat=context.getVariable('lat');
var long=context.getVariable('long');

var wundergroundURL='http://api.openweathermap.org/data/2.1/find/city?lat=' + 
  lat +
  '&lon='+ 
    long +
      '&radius=10';
    
 

var wunderGroundRequest = httpClient.get(wundergroundURL); 
context.session['wunderGroundRequest'] = wunderGroundRequest;
context.setVariable('wundergroundURL', wundergroundURL);

