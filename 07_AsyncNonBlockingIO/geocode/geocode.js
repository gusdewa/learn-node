const request = require('request');
const axios = require('axios');

const getAddress = (encodedAddress) => {
  return axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`);
}

module.exports = {
  getAddress,
};
