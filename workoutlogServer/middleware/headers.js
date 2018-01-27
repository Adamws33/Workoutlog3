// header- all origins have access to the app.js functions
module.exports = function(req, res, next){
	res.header('access-control-allow-origin', '*');
  next();
};
