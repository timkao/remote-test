var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '7a94a0b2b0800f2a1f5e84afe8723d25';

function getQueryStringData(city){
  return {
    q: city,
    type: 'accurate',
    appid: _APIKEY,
    cnt: 5
  }
}

function preRouteParams(queryStringData){
  return Object.keys(queryStringData).map(function(key){
    return key + '=' + encodeURIComponent(queryStringData[key])
  }).join('&');
}

function preUrl(type, queryStringData){
  return _baseURL + type + '?' + preRouteParams(queryStringData);
}

function getCurrentWeather(city){
  var queryStringData = getQueryStringData(city);
  var url = preUrl('weather', queryStringData);

  return axios.get(url).then(function(currentWeatherData){
    console.log(currentWeatherData.data);
  });
}

function getForecast(city){
  var queryStringData = getQueryStringData(city);
  var url = preUrl('forecast', queryStringData);

  return axios.get(url).then(function(forecastData){
    console.log(forecastData.data);
  })

}


module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}
