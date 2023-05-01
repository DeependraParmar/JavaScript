let arr = [35,32,63];
// console.log(arr);

//map() method in js: creates a new array from the existing array by performing some operation in it.
let new_arr = arr.map((item, index, array)=>{
    // console.log(item, index, array);
    return item+10;
});
console.log("Result of Map: "+new_arr);// new array created
console.log();


// filter() method in js: return a new method according to your condition or say check
let arr1 = [3,63,73,23,62,4,74];
let new_arr1 = arr1.filter((item)=>{
    return item>20;
});

console.log("Result of Filter: " + new_arr1);
console.log();


// reduce method: reduce the given array to a single value based upon the particular function or say operation
let arr2 = [1,2,3,4,5];
// let new_arr2 = arr2.reduce((item1,item2)=>{
//     return item1+item2;//returning the sum of the whole arr2
// });  method 1 for reduce

// method 2: for reduce: 
const reduce_func = (item1,item2) =>{
    return item1 * item2;
}
let new_arr3 = arr2.reduce(reduce_func);
console.log("Result of reduce: " + new_arr3);