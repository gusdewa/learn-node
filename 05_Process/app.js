console.log('Starting App');

const yargs = require('yargs');

const { argv } = yargs;
console.log(argv);
console.log(`Commands: ${argv._}`);
