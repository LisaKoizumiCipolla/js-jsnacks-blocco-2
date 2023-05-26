
function getRandomUniqueNumber(minNum, maxNum, elements){
    const numbersList = [];

    if ( (maxNum - minNum) < elements){
        return [];
    }

   while (numbersList.length < elements){
    const newRandomNumber = getRandomInt(1,5);
    if ( !numbersList.includes(newRandomNumber)){
        numbersList.push(newRandomNumber);
    }
   }

    return numbersList;
}

console.log(getRandomUniqueNumber(1,5,4));

function getRandomInt (minimumNumber, maximumNumber){
    const randomNumber = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1) + minimumNumber);
    return randomNumber;
}