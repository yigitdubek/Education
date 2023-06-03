// *********** index.js ********

// reduce ()  =  Reduces an array to a single value 
//               The return  value of the callback
//               function is the accumulated(cumulative) result,
//               and is provided as an argument in 
//                
let letters = [ "H" , "E" , "L", "P"];

function combineLetters(total, nextLetter, index,array){

    return total + nextLetter;
}

let word = letters.reduce(combineLetters);
let word2 = letters.reduceRight(combineLetters);


console.log(word);
console.log(word2);

