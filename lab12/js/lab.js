/**
 * Author:    Stephanie Arteaga
 * Created:   03.13.2022
 *
 * Thanks to Wes
 **/

// find button attach click handler
$("#input-button").click(function(){

	// get value of input field
  var inputText = $("#input-text").val();
  // find output div, add input value
  $("#output").append("<p>" + inputText);

})
