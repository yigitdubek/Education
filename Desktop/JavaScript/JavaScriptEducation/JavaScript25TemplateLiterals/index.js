// *********** index.js ********

// new feature as of (ES6)

// template literals = another way formatting output,
//                     can contain placeholders for
//                     formatting and inserting : 
//                     strings/values/variables/etc..

//                     backticks
//                     $placeholder {}

//                     Can use multiple lines
//                     embed expression

let firstName = "Bro";
let lastName =  "Code";
let price = 10;
let taxRate =0.05;
let total;


//console.log("HELLO "+firstName+" "+ lastName+"!");
console.log(`HELLO ${firstName} ${lastName} !`);
console.log(`The price is : ${price}`);
console.log(`Tax rate  : ${taxRate}`);
console.log(`Tax is : $${price*taxRate}`);
console.log(`Total is : $${total=price*taxRate+price}`);






