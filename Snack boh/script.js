
const dragons = ["silvEr", "GolD", "bRaSS", "coPPer", "bRonzE", "rEd", "BlUE", "bLAck", "WHIte", "gReeN"];

/*
const  lowerCase = dragons.map(element =>{
    return element.toLowerCase();
});

console.log(lowerCase);

const firstUpper = [...lowerCase];
console.log(firstUpper);

firstUpper.forEach((element) =>{
    return element.toUpperCase() + element.slice(1);
})

*/

const upperCase = [];

dragons.forEach((word) =>{
    const newString = word.charAt(0).toUpperCase() + word.substring(1).toLocaleLowerCase();
    upperCase.push(newString);
})

console.log(upperCase);

