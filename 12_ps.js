// Program 01: Write a program to print the marks of the student from the object using for loop
const obj = {
    Deependra: 20,
    Aditya: 20,
    Aarav: 20,
    Ashutosh: 20
};

// using for loop
for(let a=0; a<Object.keys(obj).length; a++){
    console.log("The marks of " + Object.keys(obj)[a] + " are " + obj[Object.keys(obj)[a]]);
}
//using for in loop
for(let i in obj){
    console.log(obj[i]);
}

// Problem 04: Write a program to print try again until the user enter the correct number 
// let correctNumber = 4;
// let guess;

// while(guess!=correctNumber){
//     guess = prompt("Enter your guess: ");
// }
// console.log("You entered correct number");


// Problem 05: Write a function to find the mean of five Numbers 
const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
let result = mean(3,53,34,52,15);
console.log("Result is: "+ result);