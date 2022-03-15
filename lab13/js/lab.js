/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 3 October
 * License: Public Domain
 */

 housesArray = [
    {
        title: "Gryffindor",
        text: "Bravery, helping others, and chivalry."
    },
    {
        title: "Hufflepuff",
        text: "Hard work, patience, loyalty, and fair play."
    },
    {
        title: "Ravenclaw",
        text: "Intelligence, knowledge, planning ahead, and wit."
    },
    {
        title: "Slytherin",
        text: "Ambition, cunningness, heritage, and resourcefulness."
     }
]

credit = '<div class="credits">Hogwarts house descriptions courtesy of <a href="https://online.ucpress.edu/collabra/article/5/1/31/113037/The-Science-Behind-the-Magic-The-Relation-of-the">ucpress</a></div>';


// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

// Given a name, hash the string, and
// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHatHash(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h2>The Sorting Hat has sorted you into: " + houseObj.title + "</h2>" +
          "<p>" + houseObj.text + "</p>" + credit;
  document.getElementById("output").innerHTML = newText;
})
