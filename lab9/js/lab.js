/**
Stephanie tried

author: stpehanie
created 3/1/2022
license: public domain

cred w3schools
**/

function myFunction() {


// change the color and bg color //

document.getElementById("myList").style.color = "pink";
document.getElementById("myList").style.backgroundColor = "white";

// Create an list:
const node = document.createElement("li");

// Create a text:
const textnode = document.createTextNode("Coffee");


// Append the text to the list:
node.appendChild(textnode);



// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);



}
