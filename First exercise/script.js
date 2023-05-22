let userNumbers = [];

let sum = 0;

while ( sum < 50 ){
    let i = parseInt(prompt("Insert number"));
    userNumbers.push(i);
    sum += i;
    //sum = sum + i
    
}


console.log(sum)

/* Inserire il numero
Aggiungerlo all'array
Addizinarlo agli altri numeri nell'array
Se il risultato è minore di 50, interrompere
*/