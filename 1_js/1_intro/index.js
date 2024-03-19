//QUIZ 1: IF Conditionals

/*
 *
 * IF a person is unde 18, they can't vote
 * IF a person is older than 18 but under 23, they can vote showing a permission slip
 * IF a person is older than 23, they can vote without a permission slip
 *
 */

//Solution

// const age = prompt("What is your age?");

// if (age < 18) {
//   alert("You can't vote");
// } else if (age >= 18 && age < 23) {
//   alert("You can vote with a permission slip");
// } else if (age >= 23) {
//   alert("You can vote without a permission slip");
// } else {
//   alert("Invalid input");
// }

// Ternary Solution

// age < 18
//   ? alert("You can't vote in ternary")
//   : age >= 18 && age < 23
//     ? alert("You can vote with a permission slip in ternary")
//     : age >= 23
//       ? alert("You can vote without a permission slip in ternary")
//       : alert("Invalid input");
//
// const result =
//   age < 23
//     ? "Must use a permission slip"
//     : "Can vote without a permission slip";
//
// alert("yourt vote status: " + result);

//QUIZ 2: Switch Statements
/*
 *Alex, Sara and Nancy are in the same class
 *Alex's grades are 90, 80, 95
 *Sara's grades are 89, 76, 98
 *Nancy's grades are 42, 98, 83
 *
 */
/**
 *
 *1. Calculate the average grade for each student, then save the result to a variable
 *2. Find the highest average grade and save it to a variable and print it to the console
 */

//Solution
// const alexeGrades = [90, 80, 95];
// const saraGrades = [89, 76, 98];
// const nanacyGrades = [42, 98, 83];

//* Calculing the avg for every student
//* using redulce method which reduces the array to a single value
// const alexAverage = (
//   alexeGrades.reduce((first, currentValue) => first + currentValue, 0) /
//   alexeGrades.length
// ).toFixed(2);
// console.log("Alex's average: ", alexAverage);

// const saraAverage = (
//   saraGrades.reduce((first, currentValue) => first + currentValue, 0) /
//   saraGrades.length
// ).toFixed(2);
// console.log("Sara's average: ", saraAverage);
//
// const nancyAverage = (
//   nanacyGrades.reduce((first, currentValue) => first + currentValue, 0) /
//   nanacyGrades.length
// ).toFixed(2);
// console.log("Nancy's average: ", nancyAverage);

//* Find the highest avg
// let highestAVG;
// switch (true) {
//   case alexAverage > saraAverage && alexAverage > nancyAverage:
//     highestAVG = "Alex has the highest AVG";
//     break;
//   case saraAverage > alexAverage && saraAverage > nancyAverage:
//     highestAVG = "Sara has the highest AVG";
//     break;
//   case nancyAverage > alexAverage && nancyAverage > saraAverage:
//     highestAVG = " Nancy has the highest AVG";
//     break;
// }
//
// console.log(highestAVG);
//
//
//QUIZ 3: While Loops
/*
 *
 * 1. Print Even numbers from  132 to 148 on the console
 * 2. Print numbers from 25 on 100, divisible by 7, to the console
 *
 */

// Solution 1

// let evenNumber = 132;
//
// while (evenNumber <= 148) {
//   console.log("evenNumber: ", evenNumber);
//   evenNumber += 2;
// }
//
// // Solution 2
// let baseNumber = 25;
//
// while (baseNumber <= 100) {
//   baseNumber++;
//   if (baseNumber % 7 === 0) {
//     console.log("baseNumber: ", baseNumber);
//   }
// }
//

//QUIZ 4: For Loops
//
// let number = 1;
//
// for (number; number <= 10; number++) {
//   console.log("number: ", number);
// }
//
// console.log("number: ", number);
//
// console.log("QUIZ");
//
// /*
//  *
//  * 1. Print odd numbers from 132 to 148 on the console
//  * 2. print numbers from 25 to 100, divisible by 7 and 5, to the console
//  *
//  */
//
// // Solution 1
//
// for (let oddNumber = 132; oddNumber <= 148; oddNumber++) {
//   if (oddNumber % 2 === 1) {
//     console.log("impares: ", oddNumber);
//   }
// }
//
// // Solution 2
//
// for (let index = 25; index <= 100; index++) {
//   if (index % 5 === 0 && index % 7 === 0) {
//     console.log("entre 5 y 7 a la vez: ", index);
//   }
// }

// function cube(number) {
//   if (number == 25) {
//     return 25;
//   }
//   let numberCube = number * number * number;
//   return numberCube;
// }

// let cube = (number) => (number === 25 ? "it's 25" : number * number * number);

// let numberToCube = cube(25);
// console.log(numberToCube);

// training:
// Do 2 functions one which can calculate the age.
// Other which can vote in ralation to the calculated age

// let calculateAge = (dateBirdth) => {
//   const currentDate = new Date().getFullYear();
//   const age = currentDate - dateBirdth;
//   return age;
// };
//
// let canVote = (dateBirdth) => {
//   const calculatedAge = calculateAge(dateBirdth);
//   canVote = calculatedAge >= 18 ? "Can vote" : "Can't vote";
//   return canVote;
// };
//
// const yearOfBirth = 2010;
// const voteMachine = canVote(yearOfBirth);
// console.log("canVote?", voteMachine);

//QUIZ 5: Functions

/*
 *
 * 1. Create a function called 'substraction, this function takes
 *    two parameters, then substracs one of these arguiments from the
 *    other and returns the result. Then console.log the result
 * 2. Create a function called 'is Odd' this funciont is gonna take
 *    one parameter and check if the number is odd or even, then return
 *    a boolean and console.log the result
 * 3. Declare a function called 'addition', it is conna take one argunent,
 *    then it needs to sum up all numbers from 1 to that argument and
 *    return the result. Ten console.log the result
 *
 *
 */

// //1. substraction
// let substraction = (num1, num2) => num1 - num2;
// const subTotal = substraction(8, 4);
// console.log("substraction total => ", subTotal);

// //2. isOdd
// let isOdd = (num) => (num % 2 === 1 ? true : false);
// console.log("is odd? => ", isOdd(7));
//
// //3. addition
// let addition = (lastNumber) => {
//   let sum = 0;
//   for (let index = 1; index < lastNumber; index++) {
//     sum += index;
//   }
//   return sum + lastNumber;
// };
// const additionTotal = addition(4);
// console.log("addition total => ", additionTotal);
//

/*
 *Array Methods
 */

// let students = ["Sheldon", "Leonard", "Penny", "Raj"];
//
// // Push: Adds an element to the end of an array
// students.push("Bernadette");
// console.log("push =>", students);
//
// // Pop: Removes the last element from an array
// students.pop();
// console.log("pop => ", students);
//
// // Unshift: Adds an element to the beginning of an array
// students.unshift("Howard");
// console.log("unshift => ", students);
//
// // Shift: Removes the first element from an array
// students.shift();
// console.log("shift => ", students);
//
// // Concat: Joins two or more arrays
// const concatStudents = students.concat(["Amy", "Stuart"]);
// console.log("concat => ", concatStudents);
//
// // Slice: Extracts a section of an array and returns a new arrays
// // slice(start, end): start is the index to start the slice and
// // end is the index to end the slice
// const slicedStudents = students.slice(2, 4);
// console.log("slice => ", slicedStudents);
//
// // Splice: Adds or removes elements from an array
// // splice(start, deleteCount, item1, item2, ...):
// // start is the index to start the splice
// // deleteCount is the number of elements to remove,
// // and item1, item2, ... are the elements to add
// students.splice(0, 3, "Stephen Hawking", "Neil deGrasse Tyson", "Bill Nye");
// console.log("splice => ", students);
//
// // Reverse: Reverses the order of the elements in an array
// const reversedStudents = students.reverse();
// console.log("reverse => ", reversedStudents);
//
// // IndexOf: Returns the first index at which a given element
// // can be found in the array,
// // or -1 if it is not present
// const indexOfStudent = students.indexOf("Stephen Hawking");
// console.log("indexOf => ", indexOfStudent);
// const indexOfMinusOne = students.indexOf("Elon Musk");
// console.log("indexOf minus one => ", indexOfMinusOne);
//
// // LastIndexOf: Returns the last index at which a
// // given element can be found in the arrays
// // or -1 if it is not present
// const lastIndexOfStudent = students.lastIndexOf("Raj");
// console.log("lastIndexOf => ", lastIndexOfStudent);
// const lastIndexOfMinusOne = students.lastIndexOf("Elon Musk");
// console.log("lastIndexOf minus one => ", lastIndexOfMinusOne);

/*
 *
 * QUIZ 6: Array Methods
 *
 */

// let books = [
//   "harry potter",
//   "the hobbit",
//   "the alchemist",
//   "the little prince",
//   "the catcher in the rye",
//   "the great gatsby",
//   "the lord of the rings",
//   "the da vinci code",
// ];
// /*
//  * 1. Access the last element of the array and console.log it
//  */
// // START
// let lastBook = books[books.length - 1];
// console.log("Last Book ==> ", lastBook);
// // FINISH
// let films = [
//   ["Hobbit 1", "Hobbit 2", "Hobbit 3"],
//   ["Matrix 1", "Matrix 2", "Matrix 3"],
//   ["Star Wars 1", "Star Wars 2", "Star Wars 3"],
// ];
//
// /*
//  * 2. Print the Star Wars 3 film
//  */
// let lastMovie = films[films.length - 1][films.length - 1];
// console.log("last movie => ", lastMovie);

/*
 *  Array Iteration
 */

// The  diference between Array Iteration and Array Methods is that
// Array Iteration is a way to loop through the elements of an array
// and perform an action on each element.
// Array Methods are functions that can be used to perform operations
// on the elements of an array.

// let books = [
//   { name: "harry potter", author: "J.K. Rowling", price: 850 },
//   { name: "the hobbit", author: "J.R.R. Tolkien", price: 950 },
//   { name: "the alchemist", author: "Paulo Coelho", price: 750 },
//   { name: "the little prince", author: "Antoine de Saint-Exupéry", price: 823 },
//   { name: "the catcher in the rye", author: "J.D. Salinger", price: 235 },
//   { name: "the great gatsby", author: "F. Scott Fitzgerald", price: 230 },
//   { name: "the lord of the rings", author: "J.R.R. Tolkien", price: 1000 },
//   { name: "the da vinci code", author: "Dan Brown", price: 530 },
// ];
//
// for (let book of books) {
//   console.log("for of loop => ", book.name);
// }

//! forEach method
// FOR LOOP VS FOR each
// The for loop is a traditional way to loop through the elements of an array
// The forEach method is a built-in method that can be used to loop through
// the elements of an array.
// forEach is a method that executes a provided function once
// for each element in an array.
// It does not return a new array, but instead modifies the original array.
// The forEach method is a more modern and efficient way to loop through the
// elements of an array.

// traditional for loop
// for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
//   const element = books[bookIndex];
//   console.log("for loop => ", element);
// }

// forEach method
// forEach(callbackFunction) => callbackFunction is a function that
// is called once for each element in the array
// the callbackFunction takes three parameters:
// currentValue, index, and array
// currentValue is the current element being processed
// index is the index of the current element
// array is the array that forEach is being called on
// const booksForEach = books.forEach((book) => {
//   console.log("forEach => ", book);
// });

//! map method
// The map method is a built-in method that can be used to loop through
// the elements of an array and perform an action on each element.
// map is a method that creates a new array with the results of
// calling a provided function on every element in the original array.
// It does not modify the original array.
// map(callbackFunction) => callbackFunction is a function that is called
// once for each element in the array
// the callbackFunction takes three parameters:
// currentValue, index, and array
// currentValue is the current element being processed
// index is the index of the current element
// array is the array that map is being called on

// const booksMap = books.map((bookName, bookIndex, bookArray) => {
//   return {
//     "book name: ": bookName,
//     "bookIndex: ": bookIndex,
//   };
// });
//
// console.log(booksMap);

//! reduce method
// Executes a user-supplied "reducer" callback function on each
// element of the array, in order, passing in the return value
// from the calculation on the preceding element.
// The final result of running the reducer across all elements
// of the array is a single value.
// The reduce method is a built-in method that can be used to loop
// through the elements of an array and perform an action on each element.
// reduce(callbackFunction, initialValue) => callbackFunction is a function
// that is called once for each element in the array
// the callbackFunction takes four parameters:
// accumulator, currentValue, index, and array
// accumulator is the value that is returned by the previous iteration
// currentValue is the current element being processed
// index is the index of the current element
// array is the array that reduce is being called on
// const indexedBooks = books.reduce(
//   (accumulator, currentValue) => ({
//     ...accumulator,
//     [currentValue.price]: currentValue,
//   }),
//   {},
// );
// const expensiveBook = indexedBooks[Math.max(...Object.keys(indexedBooks))];
// console.log("expensiveBook => ", expensiveBook);

//! filter method
// The filter() method is an iterative method.
// It calls a provided callbackFn function once for each element in an array,
// and constructs a new array of all the values for which callbackFn returns a truthy value.
// Array elements which do not pass the callbackFn test are not included in the new array.
// const tolkienBooks = books.filter((book) => book.author === "J.R.R. Tolkien");
// console.log("tolkienBooks => ", tolkienBooks);

//! find method
// The find() method returns the value of the first element in the provided array
// that satisfies the provided testing function. If no values satisfy the testing function,
// undefined is returned.
// const tolkienBook = books.find((book) => book.author === "J.R.R. Tolkien"); // will find The Hobbit
// console.log("first tolkienBook => ", tolkienBook);

//! some method
// The some() method tests whether at least one element in the array passes the
// test implemented by the provided function.
// It returns a Boolean value.
// const isTolkienBook = books.some((book) => book.author === "J.R.R. Tolkien");
// console.log("Is there any Tolkien books? => ", isTolkienBook);

//! every method
// The every() method tests whether all elements in the array pass the test
// implemented by the provided function.
// It returns a Boolean value.
// const allTolkienBooks = books.every((book) => book.author === "J.R.R. Tolkien");
// console.log("There are just Tolkien books? => ", allTolkienBooks);

//! includes method
// The includes() method determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.
// const isThereTheHobbit = books.includes(books.find((book) => book.name === "the hobbit"));
// console.log("Is there the hobbit? => ", isThereTheHobbit);

//! sort method
// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.
// const booksSortedByPrice = books.sort((book, bookToCompare) => book.price - bookToCompare.price);
// console.log("sortedBooks => ", booksSortedByPrice);

//! reverse method
// The reverse() method reverses an array in place. The first array element becomes the last,
// and the last array element becomes the first.
// const booksReversed = books.reverse();
// console.log("reversedBooks => ", booksReversed);

/*
 * QUIZ 7: Array Iteration
 */

/*
 * 1) create an array which includes numbers between 0 to 20
 *    by using 'push' method.
 * 2) by using this array you created in the first question,
 *    you will print the numbers that can be divided by 5 to the
 *    console using the 'for each' method
 */

// let numbers = [];
// for (let index = 0; index <= 20; index++) {
//   numbers.push(index);
// }
// const divisibleBy5 = numbers.forEach((n) => {
//   if (n % 5 === 0) {
//     console.log(n);
//   }
// });

/*
 * 3) Given an array of cities, using map() method,
 *    return/create an array which will include all the
 *    cities having only the first letter of each city name capitalized.
 * 4) Using the forEach() loop, console.log the names of all the
 *    elements in the citiesCapitalized array including the number
 *    representing the position of the element starting with 1
 *    for the first (index) element.
 */

// const cities = [
//   "miami",
//   "barcelona",
//   "madrid",
//   "amsterdam",
//   "berlin",
//   "sao paulo",
//   "lisbon",
//   "mexico city",
//   "paris",
// ];
//
// const capitalizeLetters = (word) => {
//   const firstLetter = word.charAt(0).toUpperCase();
//   const restWord = word.slice(1);
//   return firstLetter + restWord;
// };
// const capitalizedCities = cities.map((city) => capitalizeLetters(city));
//
// // console.log("capitalized cities =>", capitalizedCities);
// const capitalizedIndexedCities = cities.forEach((city, index) => {
//   console.log(index + 1 + ". " + capitalizeLetters(city));
// });

/*
 * QUIZ 8: Complex Objects
 */

/*
 * 1) Create an array of objects called 'universities'
 *    Every object needs to have 'name', 'hasGone' and 'year' properties.
 *    Loop over this array and if 'hasGone' value is true then print
 *    a statement to the console which includes 'name' and 'year' properties.
 *    If 'hasGone' is false, just print the 'name' property to the console.
 */

// const universities = [
//   { name: "una", hasGone: true, year: 1995 },
//   { name: "dos", hasGone: false, year: 1889 },
//   { name: "tres", hasGone: true, year: 1893 },
// ];
//
// universities.forEach((uni) => {
//   uni.hasGone
//     ? console.log("has gone => ", uni.name, uni.year)
//     : console.log("has not gone => ", uni.name);
// });
