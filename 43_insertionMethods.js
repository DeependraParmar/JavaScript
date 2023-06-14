// we are quite capable of inserting some HTML using javascript insertion methods which easily allows use to manipulate the dom from browser 
let div = document.getElementsByTagName("div")[0];
// div.innerHTML = div.innerHTML + "<h1>Me hu Shaakal</h1>"; // this will add the following code to the element

let new_div = document.createElement('div');
new_div.innerHTML = "<h1>lorem50</h1>";
// div.appendChild(new_div); // this will append a new div to the div.
// document.body.append(new_div); // this will append the new div to the body



// more insertion methods in javascript 
// append() it will insert the new div at the last of the div 
let new_div1 = document.createElement("container");
new_div1.innerHTML = "<h3>I am new_div1</h3>";
div.append(new_div1); // inserted a new element at the end of the container div


// prepend() is used to add the element at the starting of the element 
div.prepend(new_div1); //inserted a new element at the start of the div


//before() is used to add the element before the given element
div.before(new_div1); // inserted a new element before the div


//after() is used to add the element after the given element
div.after(new_div1); //inserted a new lement after the div


// replaceWith() is used to replace an element from another element. 
div.replaceWith(new_div1); // div has been replaced with new_div1.