// TOPIC : ARRAYS  => collection of items (contiguous memory allocation) .
// Array is a type of object 

// Array is mutable it can be changed

// CREATE ARRAY

let marks=[97, 82, 32, 64, 36];
console.log(marks);
console.log(marks.length);  //  property


let heros =["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(heros);



// _________________________________________________________________________

// Array Indices : means to access elements using its index number

// _________________________________________________________________________


// Looping over an array

// ___________________________________________________________________________

// Print all elements of array using for loop

for (let i =0; i <heros.length; i++){
    console.log(heros[i]);

// for of

for(let hero of heroes){
   console.log(hero);
}
}

// ==============================================================================================

// ARRAY METHODS

// =============================================================================================

// Push(): add to end , Pop(): delete from end & return , toString(): convert arr to str

// ______________________________________________________________________________________________

let fooditems =["potato" , "apple" , "litchi", "tomato"];

fooditems.push("chips" , "burger" , "paneer");

console.log(fooditems);

let deletedItem = fooditems.pop();
console.log(fooditems);
console.log("deleted", deletedItem);

console.log(fooditems.toString());
console.log(fooditems);


// _____________________________________________________________

// Concat (): joins multiple arrays and return results

// ______________________________________________________________

let marvelHeroes=["thor", "spiderman", "ironman"];
let dcHeroes=["superman", "batman"];
let indianHeroes=["shaktiman" , "krish"];

 let heroes=marvelHeroes.concat(dcHeroes , indianHeroes);

console.log(heroes);

//___________________________________________________________

// unshift(): add to start

//____________________________________________________________

let marvelHeroes=["thor","spiderman","ironman"];

marvelHeroes.unshift("antman");

//_______________________________________________________________

// shift (): delete from start and return

// ______________________________________________________________

let marvelHeroes=["thor" , "spiderman" , "ironman"] ;

let val = marvelHeroes.shift();
console.log("deleted",val);

//______________________________________________________________________

// Slice(): returns a piece of array =>  slice(startidx,endidx)

// _____________________________________________________________________

let marvelHeroes=["thor", "spiderman", "ironman","antman" ,"Dr.Strange"];

console.log(marvelHeroes);

console.log(marvelHeroes.slice(1,2))

// ____________________________________________________________________________________________________

// Splice(): change original array(add,remove,replace)   => splice(startIdx,delCount,newEl1)

//______________________________________________________________________________________________________

let arr=[1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 101, 102);

// ADD ELEMENT

arr.splice(2, 0, 101);

// Delete Element

arr.splice(3,1);

// Replace Element

arr.splice( 3, 1, 101);


//========================================================================================

// SUMMARY ✅
// push() & pop(): For adding/removing items from the end.

// unshift() & shift(): For adding/removing items from the start.

// toString(): To convert an array into a string.

// concat(): To join multiple arrays.

// slice(): To extract a piece of an array without modifying the original.

// splice(): To add, remove, or replace elements in an array (modifies the original).

//=========================================================================================