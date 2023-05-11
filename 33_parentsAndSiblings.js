// 1. parent elements as well as the child elements and their siblings are read-only in nature. They cannot be changed 
// 2. they are live.
// 3. they are iterable using for of loop

// parents and sibling in js 
// siblings are the children of same parent 
// body is right sibling of head and head is left sibling of body 

// parent is availabe as ParentNode in DOM 
let a = document.body.firstChild;
console.log(a.parentNode); //==> returns body
console.log(a.parentElement); //==> returns body. It will return null if it doesn't have valid element

console.log(document.documentElement.parentNode); // ==> returns the document
console.log(document.documentElement.parentElement); // ==> returns null because document is not an element