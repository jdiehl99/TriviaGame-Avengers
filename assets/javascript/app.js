var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


// start button to begin game
// create variables for results: correct / incorrect / unanswered
// create object with questions, 4 possible answers, correct (a1, a2, etc)
// do for loop to display Q&A on screen
// have answers as radio buttons beneath question
// click done to submit answers


$(document).ready(function() {

// set timer for 120 seconds
setTimeout(timeUp, 1000 * 120);

// out of time, end the game & calculate results
function timeUp() {
    console.log("time is up");
    alert("time is up");
}

$(".start-game").on("click",function(){
console.log("start game was clicked");
});

});