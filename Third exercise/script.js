
/*
let number = 0;
let sum = 0;

while (number < 10){
    number ++;
    sum += number;
}

const average = sum / number

console.log(sum);

console.log (average);
*/

const inputElement = document.getElementById("user-number");
const buttonElement = document.querySelector("button")

let sum = 0;

buttonElement.addEventListener ("click", function(){

    sum = parseInt(inputElement.value);
    console.log(sum);

    for ( let index = 1; index < 11 ; index ++){
        sum += index;
    }
    
    console.log( sum, sum/10);

});