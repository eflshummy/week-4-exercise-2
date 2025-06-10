function sum(n) {
    // checking they enter a number
    if (typeof n !== 'number' || isNaN(n)) {
        return "Enter a number";
    }
    // Check if the number is an integer
    if (n !== Math.floor(n)) {
        return "The value passed is not an integer";
    }
    // eliminate negative numbers
    if (n < 0) {
        return "The value passed is negative";
    }
    // Calculate the sum from 0 to n
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(sum(5));
// factorial function
function factorial(n){
    // validating they enter a digit
    if (typeof n !== 'number' || isNaN(n)){
        return "Enter a number please"
    }
    // validating they don't enter a negative number
    if (n < 0){
        return "Don't enter a negative number"
    }
    // factorial calculation
    let total = 1;
    for (let i = n; i > 1; i--) {
        total *= i;
    }
    return total;
}
console.log(factorial(8));
// funkyMath function
function funkyMath(...args) {
    // check the argument number to choose which operation to perform
    switch (args.length) {
        case 2:
            // 2 arguments we subtract them
            return args[1] - args[0];
        case 3:
            // 3 arguments we add them
            return args[0] + args[1] + args[2];
        case 4:
            // 4 arguments we add them separetly the divide the 2 answers
            return (args[0] + args[1]) / (args[2] + args[3]);
        default:
            return "Invalid number of arguments";
    }
}
console.log(funkyMath(5, 5, 3, 2))
// function that removes the odd numbers from a list
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];
// Remove odd numbers from original array and add to oddNumbers
for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);  // add them to the odd number array
        numbers.splice(i, 1);        // remove them from the initial array
    }
}
// sorting both arrays
numbers.sort((a, b) => a - b);
oddNumbers.sort((a, b) => a - b);
// just return the original array as the even array
console.log("Even numbers:", numbers);
console.log("Odd numbers:", oddNumbers);
// object that displays details about me
let me = {
    firstname: 'shumeez',
    lastName : 'van Schalkwyk',
    age : 18,
    favouriteColour : 'Black',
    favouriteAnimal : 'horses'
}
console.log(me);
// adding favourite food property
me.favouriteFood = 'pasta'
console.log(me);
// deleting the age property
delete me.age
console.log(me);