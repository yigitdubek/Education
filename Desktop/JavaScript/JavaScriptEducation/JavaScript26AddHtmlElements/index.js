// *********** index.js ********

// create HTML elements
// h1 .innerHTML (vulnerable to  XSS attack)
//h1.innerText (better)

const h1 =document.createElement("h1");
//h1.innerHTML ="<u>Hello World !</u>";//if somebody type <script> rather than <> that website will be hacked
const underline =document.createElement("u");
underline.innerText ="Hello World !";
h1.append(underline);
document.body.append(h1);

const h2 =document.createElement("h2");
const italic =document.createElement("i");
italic.innerText = "Sup ?";
h2.append(italic);
document.body.append(h2);

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText="Bye";
p.append(bold);
document.body.append(p);


