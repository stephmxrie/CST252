

window.onload=function(){const t=document.querySelectorAll(".glitch.text.split-effect");[].forEach.call(t,t=>{console.log(t);var e=document.createElement("canvas"),a=e.getContext("2d"),n=t,o=n.getContext("2d");function h(){var t=100+100*Math.random(),a=50+50*Math.random(),n=Math.random()*e.width,h=Math.random()*e.height,i=n+(40*Math.random()-20),l=h+(30*Math.random()-15);o.clearRect(n,h,t,a),o.fillStyle="#4a6",o.drawImage(e,n,h,t,a,i,l,t,a)}setInterval((function(){!function(){e.width=n.width,e.height=n.height,a.clearRect(0,0,a.width,a.height),a.textAlign="center",a.textBaseLine="middle",a.font=t.dataset.font+" serif",a.fillStyle=t.dataset.color,a.fillText(t.dataset.text,e.width/2,e.height/2),o.clearRect(0,0,n.width,n.height),o.drawImage(e,0,0);for(var i=10;i--;)h()}()}),1e3/15)})};

// Lab 10 //
// Author: Stephanie Arteaga //
// Created: March 6 //
// License: Public Domain //

// Credit: Wes //

// shuffle the array //
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // Shuffle other elements //
    while (0 !== currentIndex) {
        // Pick an element //
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it to another element //
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Sprt the letters //
function reorderUserName(word) {
    var wordArray = word.toLowerCase().split('');
    var newArray = shuffleArray(wordArray);
    return newArray.join('');
}

// given a string, return string in Title Case //
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// find the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

// add an event listener to button
buttonEl.addEventListener("click", function(){
  // get value from name element
  var userName = inputEl.value;
  // modify value - either sort or shuffle
  var newName = toTitleCase(reorderUserName(userName));
  // put value in output element
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
