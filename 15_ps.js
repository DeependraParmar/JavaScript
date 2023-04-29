//what will be the output of the following code
console.log("deepe\"ndra".length);

//includes method: checks whether the given string has particular string or not. Return true if it has and false in case of not available
let friend = "Deependra Parmar";
console.log(friend.includes("Parmar"));

//startwith checks whether the parent string starts with the given string set
console.log(friend.startsWith("Deependra"));

//endswith checks whether the given parent string ends with the given string set or not
console.log(friend.endsWith("mrr"));

//lowercase
console.log("Friend string in lowecase looks like: " + friend.toLowerCase());

//slice string: we have to extract the amount from the given statmennt
let statement = "I want Rs 1000";
console.log("Amount I want is: " + statement.slice("I want Rs ".length));

//try to change the 4th character of the given string
let my_name  = "Deepika";
my_name[3] = 'd';
console.log("Now my name is: " + my_name); //name dont change any way