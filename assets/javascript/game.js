//* pseudocode instructions as I start..
//* define variables - objects
//* define functions: helpers (logical) & event-listeners
//* define logic to start

//generate a random number and place on document. (needs work) 
$(document).ready(function () {
  var randomNumber = Math.floor(Math.random() * 100);
  $('#your-number').text(randomNumber);


// Game counters
var winCounter = 0;
var lossCounter = 0;

//Global Var to pass numbers to
var totalScore = [];




//function to generate random number array with the number not exceeding 12
//for creating values to assign the crystals

function getRandomNumberArray() {
    var ctr = 0
    var numberArray = [];
    while (ctr < 4) {
      var randomNumber = Math.ceil(Math.random() * 12) 
      consolelog(randomNumber);
      if(!numberArray.includes(randomNumber)){
        numberArray.push(randomNumber)
        ctr++;

      } 
    }
    return numberArray
}



// make something to start game
// function startGame() {
//}
//click jquery event - use to trigger functions when cyrtals clicked
$("crystal-1").click(function() {

}
// Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-image").on("click", function() {

    // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");

  });
  
// Here we establish the "targetNumber" (set to 50 in this example).
var targetNumber = 50;

   // Here we set the "number-to-guess" header to match the "targetNumber".
  // Eventually this will allow us to change the HTML to match the value in the JavaScript.
  $("#number-to-guess").text(targetNumber);


  //I have a lot to do here, honestly I haven't been able to put in the time coding the last 7-10 days, 
  // work and home life has been too hectic. I will circle back to this and complete it, 
  // jquery has been a struggle for me and I need more time coding and learning.