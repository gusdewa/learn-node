const request = require('request');

const isBadCondition = (error, response, body) =>
  (error || (response && response.statusCode !== 200) || body.status === 'ZERO_RESULTS');

const getAddress = (address) => new Promise((resolve, reject) => {
  const encodedAddress = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    if (isBadCondition(error, response, body)) {
      reject(`Error ${response.statusCode}: ${error || body.status}`);
    } else {
      const { results } = body;
      const [result, ...rest] = results;

      resolve({
        address: result.formatted_address,
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng
      });
    }
  });
});

module.exports = {
  getAddress,
};
