
const firstWord = prompt("Insert your first word!")
const secondWord = prompt("Insert your second word!")

function sameLengthOrNot (firstWord , secondWord){
    if (firstWord.length === secondWord.length){
        return true;
    } {
        return false;
    }
}

if (sameLengthOrNot = true){
    console.log(firstWord , secondWord);
} else if (firstWord.length > secondWord.length){
    console.log(firstWord);
} else {
    console.log(secondWord);
}
