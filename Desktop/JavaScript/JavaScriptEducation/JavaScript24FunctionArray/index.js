// *********** index.js ********

function jump(){
    console.log("you jump");
}
function punch(){
    console.log("you punch");
}

function kick(){
    console.log("you kick");
}


function block(){
    console.log("you block");
}

let actions = [];
actions =[jump,punch,kick,block];

actions.forEach(func => func());

