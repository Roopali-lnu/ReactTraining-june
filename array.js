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


/*Aggregate Data with reduce:
Example : const expenses = [ { amount: 50, category: 'Groceries' }, { amount: 20, category: 'Transportation' }, { amount: 100, category: 'Entertainment' }, { amount: 80, category: 'Groceries' }, { amount: 30, category: 'Transportation' } ];
const expenses = [ { amount: 50, category: 'Groceries' }, { amount: 20, category: 'Transportation' }, { amount: 100, category: 'Entertainment' }, { amount: 80, category: 'Groceries' }, { amount: 30, category: 'Transportation' } ];
Given an array expenses with objects representing different expenses ({amount: number, category: string}), calculate the total amount spent.
Create a function that groups expenses by category and calculates the total amount for each category.*/

const expenses = [
    { amount: 50, category: 'Groceries' },
    { amount: 20, category: 'Transportation' },
    { amount: 100, category: 'Entertainment' },
    { amount: 80, category: 'Groceries' },
    { amount: 30, category: 'Transportation' }
  ];
  
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

//Create a function that groups expenses by category and calculates the total amount for each category

  function groupExpensesByCategory(expenses) {
    return expenses.reduce((total, expense) => {
      if (!total[expense.category]) {
        total[expense.category] = 0;
      }
      total[expense.category] += expense.amount;
      return total;
    }, {});
  }
  const groupedExpenses = groupExpensesByCategory(expenses);
  console.log("Total Amount Spent:", totalAmount);
  console.log("Total by Category:-", groupedExpenses);

  /*Array Flattening:
const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];
Create a nested array nestedArray with multiple levels of arrays within arrays.
Write a function flattenArray that flattens nestedArray into a single-level array.*/

const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];

const flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray); 

/*Object Assignments
Create and Access Properties:
Create an object named car with properties: make, model, and year.
Access the make and year properties.*/

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
  };
  
  
  console.log(car.make); 
  console.log(car.year); 
  
  car.model = 'Camry';
  car.color = 'blue';
  
  console.log(car.model); 
  console.log(car.color); 
  
  for (const key in car) {
    if (car.hasOwnProperty(key)) { 
      console.log(`${key}: ${car[key]}`);
    }
  }
  
/*Nested Objects:
Create an object person with properties: firstName, lastName, and address (which is another object with properties street, city, and zipCode).
Access the city of the address.
Array of Objects:
Create an array of objects named students where each object represents a student with properties name and grade.
Use forEach to print the name and grade of each student.
Destructuring:
Use object destructuring to extract make and model from the car object.
Use array destructuring to extract the first two fruits from the fruits array.
Merge Objects:
Use the spread operator to merge two objects: obj1 with properties {a: 1, b: 2} and obj2 with properties {b: 3, c: 4}*/
  

const person = {
    firstName: 'Roopali',
    lastName: 'Rajput',
    address: {
      street: 'Ghandi Nagar',
      city: 'jammu',
      zipCode: '184202'
    }
  };
  
  console.log(person.address.city); 
  
  // Array of Objects
  const students = [
    { name: 'Mannu', grade: 'A' },
    { name: 'Lovely', grade: 'B' },
    { name: 'Mahi', grade: 'C' }
  ];
  
  students.forEach(student => {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
  });
  
  // Destructuring
  const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue'
  };
  
  const { make, model } = car;
  console.log(make); 
  console.log(model);
  
  const fruits = ["Apple", "Banana", "Mango"];
  
  const [firstFruit1, secondFruit] = fruits;
  console.log(firstFruit1); 
  console.log(secondFruit); 
  
  // Merge Objects
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  
  const mergedObj = { ...obj1, ...obj2 };
  
  console.log(mergedObj);