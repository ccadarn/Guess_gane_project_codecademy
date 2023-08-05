let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
}
 
function getAbsoluteDistance(number1, number2) {
  let absoluteDistance = Math.abs(number1 - number2);
  return absoluteDistance;
}

 function compareGuesses(human, computer, target){
   if (human > 10) {
     return alert('Number should be between 0 and 10!');
   }

   let difference1 = getAbsoluteDistance(target, human); // 5 - 9 (4)
   let difference2 = getAbsoluteDistance(target, computer); // 7 - 9 (2)

   if (difference1 <= difference2){
   return true;
   }
   else {
     return false;
   }
 }

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

function advanceRound(){
  currentRoundNumber += 1;
}
