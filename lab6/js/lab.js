

/* Hey we are learning JavaScript. Thank you Wes, very cool!

<pre> html javascript

*/

// Define variables
myTransport = ["Lexus" , "Mustang" , "The Wave"]

myMainRide = {
    make: "rx hybrid",
    model: "lexus",
    color: "silver",
    year: 2020,
    age: function() {
        return 2022 - this.year;
    }
}

// Output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
