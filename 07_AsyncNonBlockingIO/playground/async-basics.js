console.log('Starting ...');

// Register a call back that will be invocked 1s later,
// so that Node can execute the next code
setTimeout(() => {
  console.log('Call back');
}, 1000);

setTimeout(() => {
  console.log('Zero call back');
}, 0);

console.log('Finishing ...');
