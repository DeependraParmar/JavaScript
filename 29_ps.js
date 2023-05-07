//problem 01: write a js function or program to take age as input from the user and tell him whether he can drive or not
// let run = true;

// while(run){
//     let age = prompt("Enter your age: ");
//     age = Number.parseInt(age);

//     if(age<0){
//         console.error("Age cannot be negative");
//     }

//     if(age>=18){
//         alert("You can drive freeely..");
//     }
//     else{
//         alert("You cannot drive..");
//     }

//     run = confirm("Do you want to play again? ");
// }



// problem 04: redirect to google.com if user enters number greater than 4
// let number = prompt("Please enter the number: ");
// number = Number.parseInt(number);

// if(number>4){
//     location.href = "https://www.google.com";
// }


// problem 05: change the background of the page according to the input of the user 
let color = prompt("Please enter the color for your background: ");
document.body.style.background = `${color}`;