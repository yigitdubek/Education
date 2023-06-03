// *********** index.js ********

// filter ()  = Returns the elements of an array
//              that meets a condition specified
//              in a function

let students = [16,17,18,19,20];

function checkAge(age){
    if(age >= 18){
        return age;
    }
}
// if we use map function in the code 
// array[16,17,18,19,20]={undefined,undefined,value value,value}
let adultStudents = students.filter(checkAge);

console.log(adultStudents);



