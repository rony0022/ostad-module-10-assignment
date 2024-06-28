
//1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(3, 5)); // Output: 8



//2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(6)); // Output: true
console.log(isEven(7)); // Output: false



//3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(numbers) {
    return Math.max(...numbers);
}
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 10



//4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"



//5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]



//6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15



//7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]



/*8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter 
capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"*/

function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
