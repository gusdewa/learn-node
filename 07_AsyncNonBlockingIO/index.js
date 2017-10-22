const geocode = require('./geocode');
const weather = require('./weather');

const { argv } = require('yargs')
  .options({
    a: {
      alias: 'address',
      demand: true,
      describe: 'Address to fetch weather for',
      string: true,
    }
  })
  .help()
  .alias('help', 'h');

const { address } = argv;
geocode.geocodeAddress(address, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    const { latitude, longitude } = results;
    weather.getWeather(latitude, longitude, (error, weatherData) => {
      if (error) {
        console.log(JSON.stringify(error, undefined, 2));        
      } else {
        console.log(JSON.stringify(weatherData, undefined, 2));        
      }
    });    
  }
});

// 
