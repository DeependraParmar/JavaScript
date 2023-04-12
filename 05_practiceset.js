// Problem 1: Create a variable of type string and add a number to it. 
let str = "Deependra";
let num = 20;
console.log(str + num);//when something is added to a string, concatenation happens


// Problem 2: Use typeof operator to find the datatype of string 
console.log(typeof (str + num));


// Problem 3: Create an object in Javascript. Can you change it to hold a number later?
const obj={
    "Deependra" : 95,
    "Aditya" : 99,
    "Ashutosh" : 99,
    "Aarav" : 100
}
//if particular object is const, it will not allow to change the type of the object to any number or something else


// Problem 04: Try to add a new key to the above object 
obj["Akshat"] = 100;
console.log(obj);//here, obj is reference to the object and using that, we can change the key-value pairs of the object.

// Problem 05: Write a js program to create an object of five words
const dictionary = {
    hello: "greet",
    hi: "greet",
    bye: "greet",
    come: "greet",
    go: "greet"
}
console.log(dictionary);