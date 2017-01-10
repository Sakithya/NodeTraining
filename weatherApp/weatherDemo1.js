var request = require('request');

var url='http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=82550e0d9621092aa14d386145feeaa2';

module.exports = function(callback){
request({
  url:url,
  json:true
}, function (error, response, body) {
  if(error){
    callback('Unable to fetch weather');
  }
  else{
    callback('Its ' +body.main.temp +'in ' + body.name);
  }
});
}
