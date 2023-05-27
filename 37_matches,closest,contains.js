// matches() checks whether the given element matches the given css selector --> returns true if the selector matches and returns false if the selector do not matches
let id1 = document.getElementById("id1");
console.log("id1.matches(\".box\"): " , id1.matches(".box"));


// closest() method or function checks whether the css selector matches with the nearest ancestor. The element itself is also checked.
let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));


// contains() method or function checks whether an element A is inside an element B. If yes, it returns true else returns false and returns true also when element A === element B.
let id2 = document.getElementById("id2");
console.log(id1.contains(sp1)); // returns false as sp1 is not inside id1
console.log(id2.contains(sp1)); // returns true as sp1 is present inside id2