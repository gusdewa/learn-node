const request = require('request');

const KEY = '3f171c03d54e14ffdf67937cc382aeb1';

const isBadCondition = (error, response, body) =>
  (error || (response && response.statusCode !== 200));

const getWeather = (latitude, longitude) => new Promise((resolve, reject) => {
  request({
    url: `https://api.darksky.net/forecast/${KEY}/${latitude},${longitude}`,
    json: true,
  }, (error, response, body) => {
  
    if (isBadCondition(error, response, body)) {
      reject(error);
    } else {
      const { currently } = body;
      resolve(currently);  
    }
  });
});

module.exports = {
  getWeather,
};
