var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');

router.post('/', function(req, res) {
  //when we post to API uder, it will want a user object in the body
  var username = req.body.user.username;
  var pass = req.body.user.password; //TODO hash this password - hash= not readable by humans

    // match the model we created above
  //sequelize - take the user model and go out to the db and create this:
  User.create({
    username:username,
    passwordhash: '' //TODO make this hashed
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
  module.exports=router;