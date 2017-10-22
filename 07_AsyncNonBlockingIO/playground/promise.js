const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if ((Math.random() * 10) % 2 > 1) {
      resolve('Resolved');      
    } else {
      reject('Rejected');      
    }
  }, 1000);
});

aPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(`catch ${error}`);
  });
