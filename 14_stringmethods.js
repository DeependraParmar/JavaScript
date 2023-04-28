// In this , we are going to learn about more string methods 

// 1. length of the string 
let names = "Deependra Parmar";
console.log("Length of the string is: " + names.length);

//2. to uppercase
console.log("Name in Uppercase is: " + names.toUpperCase());

//3. to lowercase
console.log("Name in lowercase is: " + names.toLowerCase());

//4. slice method
console.log("Slicing of the name is: " + names.slice(0,4));//from 0 to 4(excluded)
console.log("Slicing another way: " + names.slice(5));//from 5 to end 

//5. replace method
let new_name = names.replace("Deep","Peep");
console.log("Replaced name is: " + new_name);

//6. concat method for concatenation of the given string
console.log(names.concat(" is a good boy"));

//7. trim method: used to remove the leading and trailing whitespaces
console.log("Trimmed name is: " + names.trim());

//8. strings are immutable in nature that is values of string once declared and intialised cannot be changed.


//quickquiz: print the given string using for loop
for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}