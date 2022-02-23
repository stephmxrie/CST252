/*
COPIED FROM WES GITHUB TRIED TO FIGURE IT OUT ONLY GOT TO EDIT IT A LITTLE

 * Author: S Llawom Eydansele <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */


function doSillyStuff() {


  // put stuff here

  return something;
}




// shuffleArray - take an array, returns shuffled array
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// sortUserName
//  a function that takes user input and sorts the letters
//  of their name
function sortUserName(userName) {
    // // convert to lower case
    // userName = userName.toLowerCase();
    // console.log("userName =", userName);
    // // split string to array
    // var nameArray = userName.split('');
    // console.log("nameArray =", nameArray);
    // // sort the array
    // var nameArraySort = nameArray.sort();
    // console.log("nameArraySort =", nameArraySort);
    // // join array back to a string
    // var nameSorted = nameArraySort.join('');
    // console.log("nameSorted =", nameSorted);
    // // Note that I could have done the above lines as a single line:
    // //   userName.toLowerCase().split("").sort().join("")
    return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
    // convert userName string to an array
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    // shuffle array with our shuffle function
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    // shift to Title Case (like a name)
    var newName = toTitleCase(shuffledString);
    // return array to a string
    return newName;
}

function getName() {
  var name = window.prompt("Want a new name?");
  // var name = document.getElementById("inputField").val
  return name;
}

function main() {
    var userName = getName();
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your new name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("Hey bestie, I fixed your name.<br>Your new one is above.");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

main();
