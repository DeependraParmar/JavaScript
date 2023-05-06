alert("Hello guys, this page works well!")//used to invoke a mini window with a short message

let a = prompt("Please enter your age first: ","20");//used to take the value given by the user into a particular variable 
let write = confirm("Do you want to write it to the page? ");
if(write){
    document.write(a);
}