var request = require('request');

var url='http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=82550e0d9621092aa14d386145feeaa2';

request({
  url:url,
  json:true
},
function (error, response, body) {
  if(error){
    console.log('Unable to fetch weather');
  }
  else{
    console.log('Its ' +body.main.temp +'in ' + body.name);
  }
})
