
let randomNumber = Math.floor(Math.random() * 100) + 1;

let trials = [];

let userNumber;

while ( randomNumber !== userNumber ){
    userNumber = parseInt(prompt("Guess the number between 100 and 1"));

    if (randomNumber > userNumber){
        console.log("Your number is lower than secret number");
    } else if (randomNumber < userNumber) {
        console.log("Your number is higher than secret number")
    } else {
        console.log("You won!")
    }
}