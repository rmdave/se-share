/*
* Start an ASync request to get weather so that we can make another call and service
* two requests concurrently
*
* 
*  http://api.openweathermap.org/data/2.5/weather?lat=33.3709&lon=-111.963
*/
var lat=context.getVariable('lat');
var long=context.getVariable('long');

var openWeatherMapURL='http://api.openweathermap.org/data/2.5/weather?lat=' + 
  lat +
  '&lon='+ 
    long;
    
 

var openWeatherMapRequest = httpClient.get(openWeatherMapURL); 
context.session['openWeatherMapRequest'] = openWeatherMapRequest;
context.setVariable('openWeatherMapURL', openWeatherMapURL);

