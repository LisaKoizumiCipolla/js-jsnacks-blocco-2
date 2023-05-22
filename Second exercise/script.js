
let randomNumber = Math.floor(Math.random() * 100) + 1;

let trials = 1;

let userNumber;

while ( randomNumber != userNumber ){
    userNumber = parseInt(prompt("Guess the number between 100 and 1"));

    trials++;

    if (randomNumber > userNumber){
        console.log("Your number is lower than secret number");
    } else {
        console.log("Your number is higher than secret number")
    } 
}

console.log("You guessed the number! The number was:", randomNumber, "You did in " , trials , "attempts!" );