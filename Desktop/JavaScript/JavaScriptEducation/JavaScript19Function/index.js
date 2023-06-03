// *********** index.js ********

// callback =    function passed as an argument to another function
//               The return  value of the callback
//               Allows a function to invoke another function

//***********************************          

let message;

function displayConsole(output)
{
    console.log(output);
}
function displayDOM(output)
{
    document.getElementById("myH1").innerHTML =output;
}
/*
function setMessage(text){

    message = text;
    return message;
}
*/
function setMessage(text , callback){

    message = text;
    callback(message);
}

//displayConsole(setMessage("Hi mom!"));
//displayDOM(setMessage("Hi mom!"));

setMessage("Hi mom!",displayConsole);
setMessage("Hi mom!",displayDOM);





