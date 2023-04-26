// Program for sum of first n natural numbers 
// let n = 20;
// let sum = 0;

// for(let i=1; i<=n; i++){
//     sum+=i;
// }
// console.log("Sum of first 20 natural numbers is: " + sum);




// for in loop : used to access keys of object using keys as a variable 
let obj = {
    deependra: 20,
    aditya: 19,
    aarav: 18,
    ashutosh: 20
}

for(let a in obj){
    console.log(a);         //printing the keys of the object
    console.log(obj[a]);    //printing the values of the object using the keys
}


//for of loops: are used for accessing the values of the object only on the entities which are iterable.
