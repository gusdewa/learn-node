const request = require('request');

const KEY = '3f171c03d54e14ffdf67937cc382aeb1';

const isBadCondition = (error, response, body) =>
  (error || (response && response.statusCode !== 200));

const getWeather = (latitude, longitude, callback) => request({
  url: `https://api.darksky.net/forecast/${KEY}/${latitude},${longitude}`,
  json: true,
}, (error, response, body) => {

  if (isBadCondition(error, response, body)) {
    callback(error);
  } else {
    const { currently } = body;
    callback(undefined, currently);  
  }
});

module.exports = {
  getWeather,
};
