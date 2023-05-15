// Sometimes, we dont want text and comment nodes to be part of our selection for manipulation so, we can use element only navigation which gives only the elements and filter the comment and text nodes out for easy access of the elements in the dom.

let b = document.body;
console.log("First child of b is: " , b.firstChild); // == returns the textnode
console.log("First element child of b is: " , b.firstElementChild); // == returns the nav which is actually an element

// document.previousElementSibling --> returns the previous sibling which is an element 
// document.nextElementSibling --> returns the next sibling which is an element 
// document.firstElementChild --> returns the first child which is an element 
// document.lastElementChild --> returns the last child which is an element 


//changing the color of background of first element child to yellow
document.body.firstElementChild.style.background = "red";