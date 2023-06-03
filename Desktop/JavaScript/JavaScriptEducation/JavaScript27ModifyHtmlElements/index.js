// *********** index.js ********

// modify HTML elements
// document.getElementById (older)
//document.querySelector (newer,more Powerful)

document.querySelector("#myButton").onclick =function(){
    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerText = "ByeWorld"
    h1.innerText ="";
    h1.append(underline);

    const p =document.querySelectorAll(".myP");
    // p[0].innerText = "WHOOOA"
    p.forEach(p => p.innerText="WHOAAA")
    const button = document.querySelector("button");
    button.remove();
   // const buttons = document.querySelectorAll("button");
    buttons.remove();
}

