const geocode = require('./geocode');
const weather = require('./weather');

const { argv } = require('yargs')
  .option('a', {
    alias: 'address',
    demand: true,
    describe: 'Address to fetch weather for',
    string: true,
  })
  .help()
  .alias('help', 'h');

const { address } = argv;
const encodedAddress = encodeURIComponent(address);

geocode.getAddress(encodedAddress)
  .then(({ data }) => {
    const { results } = data;
    const [result, ...rest] = results;
    console.log(`In ${result.formatted_address}`);
    const { lat, lng } = result.geometry.location;
    return weather.getWeather(lat, lng);
  })
  .then(({ data }) => {
    const { currently } = data;
    console.log(`The temperature is ${currently.temperature}* F`);
  })
  .catch((error) => {
    console.log('Bad Request');        
  });

// 
