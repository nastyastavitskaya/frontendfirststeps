var
  connect = require('connect');
  express = require('express');
  app = express()

app.get('/api/test', function(req, res){
  res.send('Hello World')
})

app.listen(3003)