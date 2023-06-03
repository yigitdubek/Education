// **********index.js**********

/*
    A function is block of code design to perform
    a particular task/procedure.(subroutine)

    We invoke "call" whenever we want it to do something.
    We need to define what we want task to do .
    function sayhello(name,age){
        name = "karl";
        console.log("hello",name);
        console.log("you are",age,"years old");
        return "karl";
    };
    var myName ="Bro";
sayhello(myName,15);  
*/
function toCelsius(f){
    return  (f-32)*(5/9);
};
function toFahrenheit(c){
    return (c*9/5)+32;
};
var myTemp = toFahrenheit(37.7);

console.log("My temp in F is",myTemp,"degrees");
