// seaching the dom provides the best method or say functions for seaching the elements from its classes, ids and queries, etc 

// getElementsByClassName is used to seach the element from class name 
let para = document.getElementsByClassName("para")[0];
para.style.color = "red";

// getElementbyID is used to search the element from id 
let button = document.getElementById("button");
button.style.background = "gold";
button.style.color = "red";


// querySelectorAll selects all the elements from the given selector name 
let params = document.querySelectorAll(".para");
console.log(params);
params[0].style.color = "red";
params[1].style.color = "green";
params[2].style.color = "gold";


//querySelector selects the first element matching with the given selector name
let button2 = document.querySelector("#button2");
button2.style.background = "gray";
button2.style.color = "white";


// getElementsByTagName is used to search the elements based upon the tag name 
// getElementsByName is used to search the elements based upon the name attribute