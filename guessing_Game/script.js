
const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("User Quit");
        break;
    }

    if(guess == random) {
        console.log("You guessed right!!, Congrats! The number was", random);
        break;
    }else if (guess < random) {
        guess = prompt("Your guess was too small. Please try again")
    }else {
        guess = prompt("Your guess was too large. Please try again");
    }
}