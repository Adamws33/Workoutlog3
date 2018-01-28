var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js')

var User = sequelize.import(__dirname+'/models/user');



//created the table in postgres
//mathces the model we defied 
// doesnt drop the db 
User.sync();
// //**********DANGER************DANGER************DANGER********
// // **********DANGER************DANGER************DANGER********
// // ****************** User.sync({force:true}); *******************
// // ***** DANGER THIS CODE WILL DROP ALL DATA STORED IN THE DB ****
// // **********DANGER************DANGER************DANGER********
// // **********DANGER************DANGER************DANGER********

app.use(bodyParser.json());
// saying to require the addition of headers from this file to have additional information sent along 
app.use(require('./middleware/headers'))
app.use('/api/user', require('./routes/user'));
// sending the string "hello world" to the api/test location for the client to pull through a header
app.use('/api/test', function(req,res){
  res.send("Hello World")
})

app.listen(3000, function(){
  console.log('app is open on 3000')
});



  

