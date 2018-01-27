var express = require('express');
var app = express();
// var bodyParcer = require('body-parcer');

app.use(require('./middleware/headers'))

app.use('/api/test', function(req,res){
  res.send("Hello World")
})

app.listen(3000, function(){
    console.log('app is open on 3000')
})