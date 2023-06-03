// **********index.js**********

// array = a special variable
//         that can hold more than one value

//          each "space" is known as an element

//          you access elements in an array by referring
//          to the index number ex.[0]


var cars = ["Mustang","Corvette","Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
cars.push("Tesla"); // add an element
cars.pop();     // removes last element

var numberOfCars = cars.length; // returns length of array

//cars = cars.sort();// sorts an array alphabetically/numeric
//cars = cars.reverse();

var lastCar = cars[cars.length-1];

console.log(cars);
console.log(numberOfCars);

