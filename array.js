// 1:- Create and Access Elements:
//Access the first and last element of the array.

const fruits1 = ["Apple", "Banana", "Mango"];

const firstFruit = fruits1[0];

const lastFruit = fruits1[fruits1.length - 1];

console.log(firstFruit);
console.log(lastFruit);


// 2:- Modify Array Elements:-
// Replace "Banana" with "Orange" in the fruits array.
// Add "Pineapple" at the end of the array.
// Remove the first element of the array.


const fruits2 = ["Apple", "Banana", "Mango"];

fruits2[1]="Orange";

fruits2.push("PineApple");

fruits2.shift();

console.log(fruits2);


// 3:- Array Methods:
// Use map to create a new array with the lengths of each fruit name.
// Use filter to create a new array with fruits that have more than 5 letters.

const fruits3 = ["Apple", "Banana", "Mango"];

const fruits3Length=fruits3.map(fruits3=>fruits3.length);
const longFruit= fruits3.filter(fruits3=>fruits3.length>5);

console.log(fruits3Length);
console.log(longFruit);

// 4:- Find and Index:
// Use find to get the first fruit that contains the letter "g".
// Use indexOf to find the index of "Mango".

const fruits4 = ["Apple", "Banana", "Mango"];

fruits4.sort();
fruits4.reverse();

console.log(fruits4);


// 5:- Array Transformation with map and filter:
//Create an array named numbers containing integers from 1 to 10.
//Use map to create a new array where each number is squared.
//Use filter to create a new array containing only even numbers from the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = numbers.map(number => number * number);

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(squaredNumbers); 
console.log(evenNumbers);   
