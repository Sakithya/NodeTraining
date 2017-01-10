var weather = require('./weatherDemo1.js');
var location = require('./locationInfo.js')
weather(function ( currentWeather){
  console.log(currentWeather);
});

location(function (location){
  if(!location){
    console.log('Unable to guess location');
    return;
  }
  console.log('log/lat:' +location.loc);
});
