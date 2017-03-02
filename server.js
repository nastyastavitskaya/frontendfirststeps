var
  connect = require("connect");
  express = require('express');
  app = express()

app.get('/api/home', function(req, res) {
  res.send('Home API works properly...');
});

app.get('/api/search', function(req, res) {
  res.send('Search API works properly...');
});

app.get('/api/about', function(req, res) {
  res.send('About API works properly...');
});

app.listen(3003)