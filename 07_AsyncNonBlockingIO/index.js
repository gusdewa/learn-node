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

geocode.getAddress(address)
  .then(({ latitude, longitude }) => weather.getWeather(latitude, longitude))
  .then((weatherData) => {
    console.log(JSON.stringify(weatherData, undefined, 2));
  })
  .catch((error) => {
    console.log(JSON.stringify(error, undefined, 2));        
  });

// 
