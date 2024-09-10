const addTwo = x => {
    return x + 2;
}

const modifyArray = (array, callback) => {
    for (let i = 0; i < array.lengh; i++) {
        array[i] = callback(array[i]);
    }
};

let myArray = [5, 10, 15, 20];
modifyArray(myArray, addTwo);

let myArray1 = [1, 2, 3, 4, 5];
let modifyArray1 = myArray1.map(x => x * 3);
//modifyArray1 = [3, 6, 9, 12, 15] 

const celsiusToFahrenheit = temp => {
    const tempF = tempC * 1.8 + 32;
    return temp;
}

let celsius = [-40, -20, 0, 20, 40]
let fahrenheit = celsius.map(celsiusToFahrenheit);
//fahrenheit == [-40, -4, 32, 68, 104]

let values = [3, -6, 2, 0, -9, 4];
let positiveValues = values.filter(x => x > 0);
//positiveValues === [3, 2, 4]

const staffNames = ["Nick", "", "Jacky", "", "Philena", "Leo"];
const validNames = staffNames.filter(name => name != "");
//validNames = ["Nick", "Jacky", "Philena", "Leo"]

const myCar = {
    make  : "Ford",
    model : "Mustang",
    year  : 2005,
    color : "red"
};

console.log(myCar.model);  // "Mustang"
console.log(myCar["color"]); // "red"

const make = myCar.make;
const model = myCar.model;

//const {maek, model} = myCar;

const car1 = {
    make  : "Ford",
    model : "Mustang",
    year  : 2005,
    color : "red"
}

const car2 = {
    make  : "Honda",
    model : "Civic",
    year  : 2011,
    color : "silver"
}

let myCars = [car1, car2, car3, car4, car5];
let redCars = myCars.filter(car => car.color === "red");

//One way to copy arrays and objects is to use the spread operator(...) like so:
let arr = [1, 2, 3];
let copyArr = [...arr];

let obj = {name : "Bill Gates"};
let copyObj = {...obj};

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea = () => {
        return this.width * this.height;
    };
}

const smallRect = new Rectangle(3, 4);
const bigRect = new Rectangle(15, 11);
console.log(smallRect.width); // 3
console.log(bigRect.height); // 11
const rect = new Rectangle(6, 8);
console.log(rect.getArea()); //48