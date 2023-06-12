// There are various attibutes in HTML which are used to access properties of elements and makes our life easy 
let container = document.getElementById("container");
let a = container.getAttribute("class"); // this will give the class of the element with id as container.
console.log(a);


// hasAttribute: returns true it the element has the class attribute and false if do not have it.
console.log(container.hasAttribute("class")); // returns true as the container has the class attribute
console.log(container.hasAttribute("style")); // returns false as it do not have the style attribute.


// setAttribute() is used to set an attribute in an Element. 
container.setAttribute("title","This is a div"); // adding or setting a title to the element container.
console.log(container.getAttribute("title")); // returning this is a div which is the title of the container.


// removeAttribute() is  used to remove an attribute from an element 
container.removeAttribute("class"); // this will remove the class attribute from the container element.


//attributes property returns the collection of all the attributes
console.log(container.attributes);



// data-* attributes: we can create our custom attributes in Javascript. But in future,js can also introduce a new attribute with the same name as that of you which willl create problem in your system. In order to get rid of this, we can create our custom attributes in the format data-*.They will be available as the property dataset.
// If we have an attribute as data-one , it will be available as dataset.one 
console.log(container.dataset); // returns all the data attributes as js collection
console.log(container.dataset.name); // returns tha value of data-name
console.log(container.dataset.game); // returns tha value of data-game
console.log(container.dataset.player); // returns tha value of data-player



