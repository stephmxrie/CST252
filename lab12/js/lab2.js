
// find red button and add click handler
$("#red-button").click(function(){
	// remove green class
  $("#the-text").removeClass("green");
	// toggle red class for text
  $("#the-text").toggleClass("red");
})


// find green button and add click handler
$("#green-button").click(function(){
	// remove red class
  $("#the-text").removeClass("red");
	// toggle green class for text
  $("#the-text").toggleClass("green");
})
