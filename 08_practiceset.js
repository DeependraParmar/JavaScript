// Problem 01: Use logical operator to find whether the age of two person lie between 10 and 20 or not 
/*
const age1 = 11;
const age2 = 18;

console.log("Do 10<age1<20: ",age1>10 && age1<20);
console.log("Do 10<age2<20: ",age2>10 && age2<20);
*/

// Problem 02: Demonstration of switch case statements. 
/*
let day = "Thursday";
switch(day){
    case "Sunday":
        console.log("Its Sunday");
        break;
    
    case "Monday":
        console.log("Its Monday");
        break;

    default:
        console.log("Its Weekend");
        
}
*/

// Problem 03: Check whether a given number is divisible by 2 and 3 or not
/*
let num = 10;
if(num%2==0 && num%3==0){
    console.log("Yes");
}
else{
    console.log("No");
}
*/

// Problem 03: Check whether a given number is divisible by either 2 or 3 or not
/*
let num = 10;
if(num%2==0 || num%3==0){
    console.log("Yes");
}
else{
    console.log("No");
}
*/

// Problem 05: Drive or not using ternary operator 
let age = 39;
console.log("You can",age>18?"drive":"not drive");