const request = require('request');
const axios = require('axios');

const KEY = '3f171c03d54e14ffdf67937cc382aeb1';

const getWeather = (latitude, longitude) => {
  return axios.get(`https://api.darksky.net/forecast/${KEY}/${latitude},${longitude}`);
};

module.exports = {
  getWeather,
};
