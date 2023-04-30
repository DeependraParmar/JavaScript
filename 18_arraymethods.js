// delete is an operator used to delete the elements from the Array 
let num = [1,2,3,4,5,6,7,8,9];

delete num[0];//delete doesn't affect the length of the array
console.log(num);

//concat method is used to concat multiple array and returns the new array
let a = [10,11,12];
let nummore = num.concat(a);
console.log(nummore)


// sort() method is used to sort the elements alphabetically 
let compare = (a,b) =>{
    return a-b;
}
let unsort = [43,6,2,6,7,1,4];
unsort.sort(compare); //modifies the original array
console.log(unsort);


// reverse() is used to reverse the whole array and the elements 
num.reverse();
console.log(num);


// splice() method or function is used to add new elements at particular position 
num.splice(2,3,21,22,23); // position for insertion, number of elements for remove, elements to add
console.log(num);


// slice() takes out a new array from existing array and creates a new array 
let subnum = num.slice(0,3);
console.log(subnum);