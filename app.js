const host = 'localhost';
const port = '8000';
const express = require('express');
const debug = (process.env.NODE_ENV === 'development');

var app = express();

// serve public dir
app.use(express.static('public'));

if (debug) {
  // allow requirejs to find deps async in development
  app.use('/app', express.static('app'));
  app.use('/config', express.static('config'));
  app.use('/bower_components', express.static('bower_components'));
  app.use('/public', express.static('public'));
}

// serve index from any route
app.use(function(req, res) {
  res.sendfile('./public/index.html');
});

// fire it up
app.listen(port, host);
