const getUser = (id, callback) => {
  // fetch user from database
  const user = {
    id,
    name: 'Dewa'
  };

  // execute the callback
  setTimeout(() => {
    callback(user);    
  }, 2000);
};

getUser(10, (user) => {
  console.log('User data come back');
  console.log(`User: ${JSON.stringify(user)}`);
});
