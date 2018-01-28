// wait for Jquery to be ready
$(function(){
  var WorkoutLog = (function($, undefined){

      //private
      var API_BASE = "http://localhost:3000/api/";
      var userDefinitions = [];

      var setAuthHeader = function(sessionToken){
        window.localStorage.setItem("sessionToken", sessionToken);
        //set the authorization header
        //This can be done on individual calls
        //here we showcase ajaxSetup as a global tool
        $.ajaxSetup({
          "headers": {
            "Authorization": sessionToken
          }
        });
      };
      //public
      return{
        API_BASE: API_BASE,
        setAuthHeader: setAuthHeader
      };
  })(jQuery);

    //iife immedietly invoked function expression











	$("#testAPI").on("click", function(){
		console.log("It is working");
  });

  // calling an ajax get to 
  var test = $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/test"
  })
  .done(function(data){
    // this is logging the info recieved from the API
    console.log(data);
  })
.fail(function(){
    console.log("Oh no!");
  });
});
