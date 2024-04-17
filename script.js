/**Write a recursive function that raises to a power a number. Number and a power to be raised to set as arguments to a function */

function raiseToPower(number, power) {
    // Base: any number put in power 0 equals 1
    if (power === 0) {
        return 1;
    }
    // Recursive case: multiply number by the result of raising number to power - 1
    else {
        return number * raiseToPower(number, power - 1);
    }
}

const number = 2;
const power = 3;
const result = raiseToPower(number, power);
console.log(`${number} raised to the power of ${power} is ${result}`); // Output: 2 raised to the power of 3 is 8