//JS Donut Counter Lab


var guest

var donuts

guest = prompt("Please enter the number of guests");

guest = parseInt(guest)

donut = prompt("Please enter the number of donuts");

donut = parseInt(donut)

if ( guest <= donut) {
  alert(`There are ${guest} guests and ${donut} donuts - we're good!`);
} else {
  alert(`There are ${guest} guests and ${donut} donuts - get ${guest - donut} more donuts!`);
}




//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
