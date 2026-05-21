// PRACTICE QUESTION

//===================================================================================

// 1. For a given array with marks of students -> [85, 97, 44, 37, 76, 60].
// Find the average marks of the entire class

// ===================================================================================

// let marks=[85, 97, 44, 37, 76, 60];

// let sum=0;

// for(let val of marks){
//     sum +=val;
// }

// let avg=sum/marks.length;
// console.log(`average marks of the class=${avg}`);

//============================================================================================================

// 2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

//=============================================================================================================

// let items =[250, 645, 300, 900, 50];



// for(let i =0; i < items.length; i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

// =========================================================================================================

// 3. CREATE an array to store companies -> "Bloomberg","Microsoft","Uber","Google", "IBM","Netflix"

// a. Remove the first company from the array

// b . Remove Uber & Add OLa in its place

// c . Add amazon at the end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let val=companies.shift();
console.log("deleted",val);

companies.push("Amazon");
console.log(companies);

// Whenever want to replace we use splice method

companies.splice(2,1,"Ola");
