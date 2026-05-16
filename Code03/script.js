// LECT 2 => Operators and Condional statement
// ======================================================


// 1. Arithmatic Operators

//___________________________________________________________


let a = 5;
let b = 2;

console.log("a=",a," & b =" ,b);
console.log("a + b =" , a + b);
console.log("a - b =" , a - b);
console.log("a * b =" , a * b);
console.log("a / b =" , a / b);
console.log("a % b =" , a % b);
console.log("a ** b =" , a ** b); // => [**] is used for power 5^2


// 2. Unary Operators => Increment / decrement 


//_________________________________________________________________

let a=5;
console.log(a++); // 5 (pehle return, phir increment)
console.log(a);   // 6
console.log(++a); // 7 (pehle increment, phir return)
console.log(a--);
console.log(a);

// 3. Assignment Operators
 
// ___________________________________________________________

let a=5;
let b=2;

a+=4;               // a=a+4
console.log("a=",a); 
a-=4;              // a=a-4
console.log("a=",a); 
a*=4;             // a=a*4
console.log("a=",a); 
a/=4;             // a=a/4
console.log("a=",a);
a%=4;            // a=a%4
console.log("a=",a); 
a**=4;           // a=a**4
console.log("a=",a); 


// 4. Comparison Operator  => returns boolean values

//_____________________________________________________________________


let a = 5;
let b = 2;

console.log ("5==2", a==b);
console.log ("5!=2", a!=b);
console.log ("5>=2", a==b);
console.log ("5<=2", a<=b);

// 5. Logical Operators => boolean values

// _______________________________________________________________

let a = 6;
let b = 5;

let cond1 = a > b;  // true
let cond2 = a===5;  // true

console.log("cond1 && cond2 = ", cond1 && cond2);   // Logical And 
console.log("cond1 || cond2 = ", cond1 || cond2);   // Logical OR
console.log("!(6>5) = ",! (a>b));

// ============================================================================

  //        CONDITIONAL STATEMENTS

  // __________________________________________________________________________

  // 1. If - statement 

  let age = 25;

  if (age>18) {

    console.log("you can vote")
    
  }

  if(age<18){

    console.log("You CANNOT vote");
  }

  // 2. if-else statement

  let mode="light";
  let color;

  if(mode=="dark"){

    color="black";
  }else{

    color="white;"

  }

  console.log(color);

  // Example: Find odd or even number

  let num = 5;

if(num%2===0){

  console.log(num,"is even");
}else{

  console.log(num,"its odd");
}

// 3. Else-if statement

let mode="dark";
let color;

if(mode==="dark"){
  color="black";

}
else if(mode ==="blue"){
  color="blue";

}

else if(mode === "pink"){

  color="pink";
}
else{

  color="white"

}

console.log(color);

// __________________________________________________________________________________


// TERNARY OPERATOR  => condition?true output:false output

// _____________________________________________________________________________________

let age=25;
let result = age>=18?"adult":"not adult";        // compact if else
console.log(result);


//________________________________________________________________



