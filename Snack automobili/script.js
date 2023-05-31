
const brand = ["Ferrari", "Lamborghini", "Maserati", "Zonda", "Mustang", "Porche"];

const model = ["Sport-car", "Semi-sport-car", "city-car", "wrackage"];

const fuel = ["Benzina", "Diesel", "Elettrico", "Gas", "Metano"];

function generateCar(quantity, brandList, modelList, fuelList){

    const generatedCar = [];

    for (let i = 0; i< quantity; i++){
        const newCar = {
            brand: brandList[getRandomNumber(0, brandList.length - 1)],
            model: modelList[getRandomNumber(0, modelList.length - 1)],
            fuel: fuelList[getRandomNumber(0, fuelList.length - 1)],
        };
        
        generatedCar.push(newCar);
    }

    return generatedCar;
}

const cars = (generateCar(15 , brand, model, fuel));

console.log(cars);

function getRandomNumber (minNumber, maxNumber){
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return parseInt(randomNumber);

}


const gasolineCars = [];

for ( let i = 0 ; i < cars.length; i++){
    const car = cars[i];

    if (car.fuelList === "benzina"){
        gasolineCars.push(car);
    }
}

const dieselCars = [];

const otherCars = cars.filter((car) => {
    if (car.fuelList !== "diesel" && car.fuelList !== "benzina"){
        return true;
    }
    return false;
})

console.log(gasolineCars, dieselCars, otherCars);