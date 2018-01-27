var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var bodyParcer = require('body-parcer');

// saying to require the addition of headers from this file to have additional information sent along 
app.use(require('./middleware/headers'))

// sending the string "hello world" to the api/test location for the client to pull through a header
app.use('/api/test', function(req,res){
  res.send("Hello World")
})

var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'familia7', {
    host:'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
      console.log('connected to workoutlog postgress db');
    },
    function(err){
      console.log('err');
    }
);
 
var User = sequelize.define('user',{
    username: Sequelize.STRING,
    passwordhash: Sequelize.STRING,
});

//created the table in postgres
//mathces the model we defied 
// doesnt drop the db 
User.sync();
// User.sync({force:true}); // drops the table completely 

app.use(bodyParser.json());

app.post('/api/user', function(req, res) {
  //when we post to API uder, it will want a user object in the body
  var username = req.body.user.username;
  var pass = req.body.user.password; //TODO hash this password - hash= not readable by humans

  // match the model we created above
  //sequelize - take the user model and go out to the db and create this:
  User.create({
    username:username,
    passwordhash:pass
  }).then(
    //sequelize is going to return the object it created from the db
            function createSuccess(user){
              //sucessfull get this
              res.json({
                user: user,
                message: 'created'
              });
            },
            function createError(err){
              res.send(500, err.message);
            }
         );
})
app.listen(3000, function(){
  console.log('app is open on 3000')
});