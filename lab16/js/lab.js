/*
 * Author: Stephanie Arteaga
 * Created: 20 March
 * License: Public Domain

 * Credit: Wes Modes
 */

 //  Create a constructor for animal called animal, including characteristics
 function Animal(type, breed, old, color, extras) {
   this.type = type;
   this.breed = breed;
   this.old = old;
   this.color = color;
   this.extras = extras;
   // Add a method info() to your constructor that neatly returns a string with all that information
   this.info = function() {
     return("This animal is a " + this.color + " " + this.old + " " + this.type + " " + this.breed + " " + "called " + this.extras);
   }
 }
 // instantiate objects with your constructor for every animal you've ever owned:
 var cat = new Animal("Domestic Short Hair", "Cat", "2 years old", "black", "Pepper")
 var cat2 = new Animal("Domestic Short Hair", "Cat", "7 months old", "black", "Pantone")

 // For each instantiated object, call your method info() and output the results to your output div. Here's a reminder:
 console.log(cat.info());
 console.log(cat2.info());
 // // we add text (including <p> tags to the end of our output div
 outputEl = document.getElementById(output);
 $("#output").prepend("<p>" + cat.info() + "</p>");
 $("#output").prepend("<p>" + cat2.info() + "</p>");
