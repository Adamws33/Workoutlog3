var express = require('express');
var app = express();
// var bodyParcer = require('body-parcer');

// saying to require the addition of headers from this file to have additional information sent along 
app.use(require('./middleware/headers'))

// sending the string "hello world" to the api/test location for the client to pull through a header
app.use('/api/test', function(req,res){
  res.send("Hello World")
})

app.listen(3000, function(){
    console.log('app is open on 3000')
})