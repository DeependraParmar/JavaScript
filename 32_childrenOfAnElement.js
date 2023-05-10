// All the elements that are inside the scope of a particular element so, all of those are called as the children of the outer element. Direct as well as deeply nested elements 
// head and body are direct children of html
// head and body are siblings of each other.
// element.firstChild ==> returns the first child of the element
// element.lastChild ==> returns the last child of the element


console.log(document.body.firstChild);//returns text node as there is a space between the body and div
console.log(document.body.lastChild); //returns the script tag as the last child of the body
console.log(document.body.childNodes); // returns a nodelist containing all the children of the body


// following of them are always true 
// 1. element.childNodes[0] === element.firstChild 
// 2. element.childNodes[element.childNodes.length - 1] === element.lastChild


// there is also a method to check whether there are any childNodes in the element which is element.hasChildNotes().

//when we run childNodes on an element, it looks like an array but actually is a nodelist so, if we want to convert the nodelist into the array then, we can use
 
let arr = Array.from(document.body.childNodes);
console.log(arr); 