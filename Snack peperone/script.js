/*
listaPeperoni = [ 
    {
        colore : "viola",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "arancione",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "giallo",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "blu",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "rosso",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "verde",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "grigio",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "nero",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "bianco",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "indaco",
        peso : getRandomNumber(10, 2000),
        lunghezza : getRandomNumber(8, 20) + "cm",
    }
  ]

console.log(listaPeperoni);



 function getRandomNumber (minNumber, maxNumber){
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return parseInt(randomNumber);

}

*/

const types = ["sweet", "yellow", "red", "green bell", "habanero" , "halapeno", "calabrese"]

function generatePeppers(quantity, typeList){

    const generatedPeppers = [];

    for (let i = 0; i< quantity; i++){
        const newPepper = {
            type: typeList[getRandomNumber(0, typeList.length - 1)],
            weigth : getRandomNumber(0,1000),
            length : getRandomNumber (0, 100),
        };
        
        generatedPeppers.push(newPepper);
    }

    return generatedPeppers;
}

const peppers = (generatePeppers(10 , types));

console.log(peppers);

let sum = 0;

for (let i = 0; i < peppers.length; i++){
    sum += peppers[i].weigth;

}

console.log(sum);

function getRandomNumber (minNumber, maxNumber){
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return parseInt(randomNumber);

}