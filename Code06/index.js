// Loops Practice Questions

// 1.Print all even numbers from 0 to 100

for (let num = 0; num<=100; num++) {
    if (num%2==0) {   // even number

        console.log("num =",num);
        
    } 
    
}

// 2. Create a game where u start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;

let userNum = prompt("Guess the game number :");
// console.log(userNum);

while(userNum != gameNum){  // game

    userNum = prompt("U entered wrong number . Guess again :");

}

console.log("Congratulations , u entered the right number");