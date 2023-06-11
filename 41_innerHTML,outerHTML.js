// console.dir() method basically returns the elements as an object along with its properties while console.log() returns in the form of an element.

// innerHTML property allows to get the HTML inside the element as the string 
let div = document.getElementById("container");
console.log(div.innerHTML);
div.innerHTML = "This is now inner html";


//outerHTML property allows to get the HTML inside the element along with the element itself.
console.log(div.outerHTML);


// we can print the data or value of particular object using .data and .value properties. 
// document.body.firstChild.data ==> returns the data inside the object
// document.body.firstChild.nodeValue ==> returns the data inside the object 



// textContent property allows me to get the whole text of the element as a string 
console.log("Text of the division is: " , div.textContent);