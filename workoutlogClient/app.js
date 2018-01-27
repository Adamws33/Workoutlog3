// wait for Jquery to be ready
$(document).ready(function(){
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
