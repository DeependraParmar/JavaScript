let num = [1,2,3,4,5];
for(let i = 0; i<num.length; i++){
    console.log(num[i]);
}
console.log();


//for each loop
num.forEach((element)=>{
    console.log(element*element);
});


// suppose you have an html collection and you need to convert that collection into array so, you can use Array.from for this task 
let my_name = "Deependra";
let arr = Array.from(my_name);
console.log(arr)


// for of loops for arrays are used to access the elements of the array in short syntax
for(let i of num){
    console.log(i);
}


//for in loops for arrays: used to access the array index
for(let item in num){
    console.log(item);
    console.log(item*item);
}

