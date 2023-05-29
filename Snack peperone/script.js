 listaPeperoni = [ 
    {
        colore : "viola",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "arancione",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "giallo",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "blu",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "rosso",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "verde",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "grigio",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "nero",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "bianco",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }, 
    {
        colore : "indaco",
        peso : getRandomNumber(10, 2000) + "g",
        lunghezza : getRandomNumber(8, 20) + "cm",
    }
  ]

console.log(listaPeperoni);

 function getRandomNumber (minNumber, maxNumber){
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return parseInt(randomNumber);

}