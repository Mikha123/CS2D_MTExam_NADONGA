//declare a variable that will hold theFavNumber
//use while loop and prompt()window to ask user to guess favorite number until they guess successfully
// for each gues,log wether the guess was too high,too low,or correct.


let favNumber = 11; 
let guess = 0;
let attempts = 0; 

while (guess !== favNumber) {
  guess = parseInt(prompt("Guess my favorite number (1-11):"));
  attempts++;

  if (guess < favNumber) {
    console.log(`Guess ${guess} is too low.`);
  } else if (guess > favNumber) {
    console.log(`Guess ${guess} is too high.`);
  }
}

console.log("You know my favorite number");





