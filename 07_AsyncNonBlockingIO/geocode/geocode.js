const request = require('request');

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);
  
  const isBadCondition = (error, response, body) =>
  (error || (response && response.statusCode !== 200) || body.status === 'ZERO_RESULTS');
  
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true,
  }, (error, response, body) => {
    if (isBadCondition(error, response, body)) {
      callback(`Error ${response.statusCode}: ${error || body.status}`);
    } else {
      const { results } = body;
      const [result, ...rest] = results;

      callback(undefined, {
        address: result.formatted_address,
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress,
};
