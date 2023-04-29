// Arrays are the collection of similar type of data 
let marks = [34,63,63,62,72,93];
console.log(marks);

// accessing the value of the array 
console.log(marks[3]);

//changing the value of marks of second child to NUll
marks[2] = null;

console.log(marks);


//finding the length of the given array
console.log("Length of the given array is: " + marks.length);

//In Javascript, array are considered to be objects and when we use typeof over array, it returns objects
console.log("Type of the array is: " + typeof marks);

// quick quiz: accessing or printing the whole array using the for loop 
for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
}