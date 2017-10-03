const express = require('express');
const { log } = console;
const app = express();

// BEGIN Setup Middlewares 
app.use((req, res, next) => {
  log(`${req.method} request for ${req.url} - ${JSON.stringify(res.body)}`);
  next();
});

app.use(express.static('./public'));
// END Setup Middlewares

app.listen(3000);

log('App is running on port 3000');
module.exports = app;
