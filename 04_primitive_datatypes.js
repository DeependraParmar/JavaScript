// Primitive datatypes are the predefined or already defined datatypes provided by javascript which can be easily used and accessed 
// Formula: NNBBSSU
//1. Null
//2. Number
//3. Boolean
//4. BigInt
//5. String
//6. Symbol
//7. Undefined

let a = null;
let b = 39;
let c = true;
let d = BigInt(3909430);
let e = "Learn Logics";
let f = Symbol(934);
let g = undefined;

console.log(a,b,c,d,e,f,g);


// typeof operator is used to determine the datatype of the given primitive datatype 
console.log(typeof f);


// Objects in Javascript: they are non-primitive datatype of javascript 
const obj = {
    0: "Deependra",
    1: "Aditya",
    2: "Ashutosh",
    3: "Aarav"
}
console.log(obj);
console.log(obj[2]);//values can be easily accessed using the key of the object