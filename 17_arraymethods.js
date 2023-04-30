// there are various methods in array for simple operations 
let num = [1,2,3,4,5,6,7,8];

//toString() method
let b = num.toString();
console.log("Type of b is: " + typeof b);

//join() method joins all the elements of the array using a delimiter or a seperator
console.log("Join() method returns: " +num.join("-"));

//pop() method removes the last element and updates the original array
num.pop();
console.log("Now, the array num is: " + num);

//push() inserts an element at the end of the array and updates the original array
num.push(9);
console.log("Now after push, num becomes: " + num);

//shift() removes the first element and return the element and updates the original array
console.log(num.shift());

//unshift() adds a new element at start and return the new array length and updates the original array
console.log(num.unshift(1),num);

