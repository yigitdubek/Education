// **********index.js**********

// array = a special variable
//         that can hold more than one value

//          each "space" is known as an element

//          you access elements in an array by referring
//          to the index number ex.[0]


function getRandom (min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
};
randNum = getRandom(1,8);
console.log(randNum)
