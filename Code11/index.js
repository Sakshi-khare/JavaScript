// =======================================================

// FUNCTIONS => block of code that performs a specific task

//========================================================

function myFunction(){
    console.log("Welcome to Coding World !");
    console.log("We r learning JS :");

}
myFunction();
myFunction();

//____________________________________________________________

// PARAMETER AND ARGUMENT

// ___________________________________________________________

function myFunction(msg) {

    // parameters -> inputs
    console.log(msg);
    
}

myFunction("I LOVE JS" , 100);     // argument => the value which we pass in function call

//==================================================================================================

// CREATE A FUNCTION WHICH add 2 numbers and give sum

// ==================================================================================================


function sum(x , y){

//     // function parameter -> like local variables -> block scope of function

    s= x+y;
    return s;
    // console.log(x+y);
}
let val = sum(3,4);
console.log(val);

// ===============================================================================================

// ARROW FUNCTIONS => Compact way of writing a function

// =================================================================================================

// sum function

// function sum(a , b){
//     return a + b;

// }

// // MODERN JS

const arrowSum=(a,b)=>{
    console.log( a + b);
};

// // multiplication function

function mul( a , b){
    return a * b;
}

const arrowMul=(a,b)=>{
    console.log(a*b);
};

// // We can use arrow functions without passing any variable

const printHello=()=>{
    console.log("hello");
};

// ============================================================================================================================================

// forEach Loop in Arrays   => arr.forEach(callBackFunction)

// CallBackFunction : Here, it is a function to execute for each element in array. It is passed as an argument to another function.
// this function is only used for arrays

// ============================================================================================================================================

let arr = [ 1 , 2 , 3 , 4, 5];

arr.forEach((val)=>{

 console.log(val);

})

//=================================================================================================

// INTERVIEW QUESTION => WHAT is Higher Order Funstions / Methods => forEach is a HOF 

// it takes another function parameter and returns another function as an output.

//==================================================================================================

// SOME MORE ARRAY METHODS 

// ==================================================================================================

// 1. MAP

// Creates a new array with the results of some operation. The value its callback returns are used to 
// form a new array

// arr.map(callbackFnx(value,index,array))

let nums= [ 2, 4, 7, 8];

let newArr=nums.map((val) =>{
    return val *val;
});

console.log(newArr);

// =========================================================================================================

// 2. FILTER 

// Creates a new arr of elements that give a true for a condition/filter

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenArr= arr.filter((val)=>{
       return val%2 ===0;
});

console.log(evenArr);

//===============================================================================

//3. REDUCE

// Performs some operation and reduces the arr to a single value. it returns that single val.


let arr=[1, 2, 3, 4];
 const output=arr.reduce((res,curr)=>{
    return res + curr;
 });

 console.log(output); // 10
