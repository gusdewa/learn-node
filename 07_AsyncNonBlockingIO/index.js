const geocode = require('./geocode');
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
    console.log(JSON.stringify(results, undefined, 2));
  }
});
