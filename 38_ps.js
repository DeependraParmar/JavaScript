// problem 01: create a navbar and change the first element of the navbar to cyan 
let navbar = document.getElementsByClassName("navbar")[0];
navbar.firstElementChild.style.color = "cyan"; //since the only element in the navbar is the ul so whole ul consisting of all the li turns cyan

// problem 02: create a table in html without tbody and check the elements section in inspect developer tools on the browser whether the code has been auto corrected and added tbody automatically or not 
// Ans: tbody has been successfully added inside the table in the element panel but auto correction will not be done in the view page source section because it shows the code that the user has written for the creation of the particular website which is also known as raw source code.

// problem 03: create a parent div with three children and change the color of the first and the last child using dom manipulation techniques 
let div = document.getElementById("container");
div.firstElementChild.style.color = "red";
div.lastElementChild.style.color = "green";


// problem 04: use the navbar created above in the problem 01 and change the color of all the li tags to cyan ==> already done


