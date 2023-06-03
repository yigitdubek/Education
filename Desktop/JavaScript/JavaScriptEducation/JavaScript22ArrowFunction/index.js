// *********** index.js ********

// closure       =      arrow function =>
//                      shortcut for a function expression

/*
let hello;
let x = "Yo";
let y = "Bro";

// function expression

hello = function(x,y){
    return x+ " World " + y;
}
console.log(hello(x,y));

// arrow function

hello = x => x + " World " + y;
console.log(hello(x,y));


let storeUSD =[5, 6, 7, 8, 9];
let storeEUR;
storeEUR = storeUSD.map(value => value *=0.84 ); 

console.log(storeEUR);

let student =[16, 17, 18, 19, 20];
let adultStudents;

adultStudents=student.filter(age => age >= 18);

console.log(adultStudents);
*/

let letters =["H","E","L","P"];
let word;


word = letters.reduce((total,nextLetter) => total+nextLetter);

console.log(word);




