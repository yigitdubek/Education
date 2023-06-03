// *********** index.js ********

// closure       =      A function with preserved data
//                      Give you access to an outer function's scope,
//                      from an inner function

//                      State of variables in outer scope are "saved".
//                      Variables in outer scope are considered "private".

// *************************

/*
let score = function(){
    
    let points = 0;

    return function(){
        points +=1
        return points;
    }
}();
//points = 100;

console.log(score());
console.log(score());
console.log(score());

*/




// closure example w/ arguments

function makeSize(size){

    return function(){
        document.body.style.fontSize = size + "px";
    }
}

function makeFont(font){

    return function(){
        document.body.style.fontFamily = font;
    }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let fontInkFree = makeFont("Ink Free");
let fontConsolas = makeFont("consolas");
let fontSansSerif = makeFont("sans-serif");


size20();
size30();
size40();

fontInkFree();
