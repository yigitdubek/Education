// *********** index.js ********

//  Mouse events
//  element.addEventListener(type,function)

const div = document.querySelector("#myDiv");

div.style.backgroundColor ="grey";
div.style.width = "300px";
div.style.height ="300px";

/*
div.addEventListener("click",e =>{
    console.log("You clicked the mouse!");
    div.style.backgroundColor ="yellow";

})

div.addEventListener("mousedown",e =>{
    console.log("You are holding  the mouse down ");
    div.style.backgroundColor ="red";

})

div.addEventListener("mouseup",e =>{
    console.log("You are holding  the mouse up ");
    div.style.backgroundColor ="grey";

})

div.addEventListener("dblclick",e =>{
    console.log("You double clicked ");
    div.style.backgroundColor ="pink";

})
div.addEventListener("contextmenu",e =>{
    console.log("You open the context menu ");

})
div.addEventListener("mouseover",e =>{
    console.log("You entered the square ");
    div.style.backgroundColor ="pink";


})
div.addEventListener("mouseleave",e =>{
    console.log("You left the square ");
    div.style.backgroundColor ="gray";


})
*/
div.addEventListener("mousemove",e =>{
    console.log("You are within the square ");


})