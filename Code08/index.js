// PRACTICE QUESTIONS

// 1. Prompt the user to enter their full name . Generate a username for them based on the input. Start username with @ , followed by their full name and ending with fullname length.

let fullName = prompt("enter your fullName without spaces");

let username="@" +fullName + fullName.length;
console.log(username);