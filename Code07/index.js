// ====================================================

// Strings => sequence of charcters represent text

// ===================================================

// CREATE STRING 
  // 2nd Method

// String has some inbuilt properties and functions . Functions are also know as method

// String Length = to print length of string 


// ===========================================================

// Template Literals in JS => way to have embedded expressions in strings

//     `this is template literal`

let obj={
    item:"pen",
    price:10,
};



let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);

// Escape is a string charcter \n which means a next line.

//==============================================================

// STRING METHODS => built in functions to manipulate strings

// strings are immutable

// 1.  str.toUpperCase()
// 2.  str.toLowerCase()
// 3.  str.trim()                      // removes whitespaces
// 4.  str.slice(start,end?)           // returns part of string
// 5.  str1.concat(str2)               // joins str2 with str1
// 6.  str.replace(searchVal,newVal)
// 7.  str.charAt(idx)