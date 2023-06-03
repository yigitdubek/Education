// *********** index.js ********

// anonymous function = Function w/o a name.
//                      Often not accessible after
//                      its initial creation

// benefits =  Doesn't Clutter global namespace
//             Usable once
//             Can be passed as arguments

// ************************

//IIFE = a JS function that runs as soon as it is defined
//Grouping operator = ()

(function (){
    document.getElementById("myH1").innerHTML= " Hey! "
})();
//setTimeout(function,milliseconds)

let task = function(){document.getElementById("myH1").innerHTML= " sup! ";}

setTimeout(task,2000);

setTimeout(function(){
    document.getElementById("myH1").innerHTML= " karl! "},
    1000);

