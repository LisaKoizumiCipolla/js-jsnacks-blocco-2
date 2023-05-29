
/*
const BasketballPlayer = {
    name : "Lola",
    surname : "Bunny",
}



const averagePoints = (Math.random() * (50 - 0 + 1)).toFixed(2);
BasketballPlayer.averagePointsForGame = averagePoints + "";

const successfull3Points = (Math.random() * (100 - 0 + 1)).toFixed(2) + "%";
BasketballPlayer.successRate3PointsShoots = successfull3Points;

const stopsRate = Math.floor(Math.random() * (30 - 0 + 1)) + "";
BasketballPlayer.stops = stopsRate + "";

const shootsNumber = Math.floor(Math.random() * (100 - 20 + 1)) +20 + "";
BasketballPlayer.shoots = shootsNumber + "";

console.log(BasketballPlayer);

*/


const BasketballPlayer = {
    playerId : "",
    name : "Lola",
    surname : "Bunny",
    appm : "",
    pct3 : "",
    blk : "",
    shots : "",
}

BasketballPlayer.appm = getRandomNumber (0, 50);
BasketballPlayer.pct3 = getRandomNumber (0, 100) + "%";
BasketballPlayer.blk = getRandomNumber (0, 30);
BasketballPlayer.shots = getRandomNumber (20, 100);
BasketballPlayer.playerID = makeId(3, "QWERTYUIOPASDFGHJKLZXCVBNM") + getRandomNumber (0, 9)+ getRandomNumber (0, 9)+ getRandomNumber (0, 9);


console.log(BasketballPlayer);

//To make random number
function getRandomNumber (minNumber, maxNumber){
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return parseInt(randomNumber);

}

//To make random id
function makeId(length, allowedChars) {
    let result = '';
    let counter = 0;

    while (counter < length) {
      result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
      counter += 1;
    }

    return result;
}