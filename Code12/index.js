// PRACTICE QUESTIONS

// 1. Create a function using the "function" keyword that takes string as an argument
// & returns the number of vowels in the string

function countVowels(str){
    for(const char of str ){
        if (ch==="a"  || ch==="e" || ch==="i" || ch==="o" || ch==="u"){
            count ++;
        }
    }

    return count;

    }


// 2. Create an arrow function to perform the same task

const countVow=(str)=>{

     for(const char of str ){
        if (ch==="a"  || ch==="e" || ch==="i" || ch==="o" || ch==="u"){
            count ++;
        }
    }

    return count;

}

// 3. For a given array of numbers , print the square of each value using forEach loop.

let nums = [2, 3, 4, 5, 6];

nums.forEach((num)=>{
    console.log(num*num);
});

// // OR 

let nums = [67, 52, 39];

let calcSquare=(num)=>{
    console.log(num*num);
};

nums.forEach(calcSquare);

// 4. we are given array of marks of student . Filter out the marks of student that scored 90+.

let marks=[87, 93, 64, 99, 86];

let arr=marks.filter((val)=>{
 return val > 90
  
});
console.log(arr);

// 5. TAke a no n as input from user.Create an array of nos from 1 to n.
// Use the reduce method to calculate sum of all nos in array.Use the reduce method to calculate product of all nos in array

let num = prompt("enter n :");
let arr=[];

for(let i =1; i<=n; i++){
    arr[i-1]=i; 
}
console.log(arr);
let sum =arr.reduce((res,curr)=>{
    return res + curr;

});
 console.log("sum =",sum);

 let mul =arr.reduce((res,curr)=>{
    return res + curr;

});

console.log("factorial=",mul);