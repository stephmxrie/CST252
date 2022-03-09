/**
 * Author:    Stephanie Arteaga
 * Created:   03.08.2022
 *
 * (c) Copyright by Blub Corp.
 **/


//Find the element
$(".main").append("<button id=my-button>Don't click me.")

$("#my-button")
//Adding the alert function
$("#my-button").click(function(){
  alert("hey if you’re reading this i am free on thursday night. if you would like to hang out i am free on thursday night when i am free to hang out. i am free to hang out on thursday night so if you want to hang out on thursday night i am free.");
})
//Adding tyle to the alert
$("#my-button").click(function(){
  $(".main").css("background-color", "#dd3232");
})
//Styling the button
$("#my-button").css("background-color", "#dd3232");
$("#my-button").css("padding", "20px");
