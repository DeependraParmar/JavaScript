let random = Math.random() * 100;
let number = Math.round(random);

let guess;
let count = 0;

while (number != guess) {
  guess = prompt("Enter your guess(0-100): ");

  if (guess > number) {
    console.warn("Guess is greater....");
    console.log();
    count++;
  }
  else if (guess < number) {
    console.warn("Guess is smaller....");
    console.log();
    count++;
  }
  else {
    console.log("Congratulations!! You guessed in corrrectly....");
    break;
  }
}

console.log("Total chances taken: " + count);