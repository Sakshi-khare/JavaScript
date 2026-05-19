//========================================================

// TOPIC : Loops

// ========================================================

// 1. FOR loop => execute a piece of code again & again

// Print 1 to 5

// for (let i =1; i<=5; i++){
//     console.log("HELLO JAVASCRIPT !");
// }
// console.log("Loop has ended");

// Calculate sum of 1 to  n numbers

// let sum =0;
// let n=100;
// for (let i =1; i<=n; i++){
//     sum = sum +i;
// }

// console.log("sum =",sum);

// infinite Loop : A loop never ends

// ________________________________________________________________

// 2. while Loop

// ________________________________________________________________

// let i = 1;
// while(i<=5){
 
//     console.log("i =",i);
//     i++;
// }

// ______________________________________________________________

// 3. Do While

// _____________________________________________________________

// let i = 1;

// do {

//     console.log("hiii");
//     i++;
    
// } while (i<=10);


// ______________________________________________________________

// 4. For-of Loop => apply loop on indiviual character present on string

// This loop is used for Arrays and String but not use for object

// Syntax: for(let val of strVar)

let str = "SAKSHI";

for(let i of str){      // iterator => characters

     console.log(i);
     size++;
}

console.log("string size =",size);     // gives string size 


//_________________________________________________________________________

// For-in loop => used for objects and further also used for arrays

let student={
    name: "Rahul Kumar",
    age:20 ,
    cgpa: 7.5,
    isPass: true ,
}

for(let key in student ){

    console.log("key=",key,"value=",student[key]);        // access the values of key 
}