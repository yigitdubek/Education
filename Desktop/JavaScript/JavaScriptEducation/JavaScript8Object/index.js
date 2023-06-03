// **********index.js**********

// object = a container for properties / methods

// property = values /variables that describe what an object has
// methods = functions that describe what an object can do

var human1 = {
    name : "Rick",
    age : 65,
    
    
    eat : function(){
        console.log("Rick is eating food")
        },
    drink : function(){
        console.log("Rick is drinking alcohol *burp ")
    },
    sleep : function(){
        console.log("Rick has passed out");
    }    
};

human1.name // dot notation
human1['name'] // bracket notation



var human2 = {

    name : "Morty",
    age : 16,
    eat : function(){
        console.log("Morty is eating food");
        },
    drink : function(){
        console.log("Morty is drinking water ");
    },
    sleep : function(){
        console.log("Morty is asleep");
    }    
};
console.log(human1.name);
console.log(human1['age']);
human1.eat();
human1.sleep();


console.log(human2.name);
console.log(human2['age']);
human2.eat();
human2.sleep();
