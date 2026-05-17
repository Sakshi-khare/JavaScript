// 1.Get user to input a number using prompt("Enter a number:").Check if the number is a multiple of 5 or not.

// prompt and alert are in built function in JS

let num =prompt("Enter a number:");

if(num % 5 === 0){
    console.log(num ,"is multiple of 5" );
}else{
    console(num,"is NOT a multiple of 5");
}

// 2. Write a code which can give grades to students according to their scores
// 80-100 , A
// 70-89 , B
// 60-69 , C
// 50-59 , D
// 0-49 , F

let marks = prompt("Enter marks (0-100) :");

if(marks >=90 && marks<=100){
    grade = "A";
}
else if (marks>=70 && marks<=89) {
    grade = "B";
} 
else if(marks >=60 && marks<=69){
    grade = "C";

}

else if(marks>=50 && marks<=59){
    grade = "D";

}

else if (marks>=0 && marks<=49){
    grade = "F";

}

console.log("according to your scores , your grade was :",grade);