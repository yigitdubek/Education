// **********index.js**********

// array = a special variable
//         that can hold more than one value

//          each "space" is known as an element

//          you access elements in an array by referring
//          to the index number ex.[0]

var date = new Date(0);
var date = new Date();
var date = new Date(2022, 3, 4, 18, 1, 2, 3);
var date = new Date("january 20 ,2022 16:20:01:02");
date.setFullYear(1999);
date.setMonth(6);
date.setDate(2);
date.setHours(2);
date.setMinutes(0);

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayOfMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
let millisecond = date.getMilliseconds();







console.log(year);
console.log(month);
console.log(dayOfWeek);
console.log(dayOfMonth);
console.log(hours);
console.log(minutes);
console.log(second);
console.log(millisecond);

