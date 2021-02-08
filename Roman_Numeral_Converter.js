function decimalToNumeral() {
    
// Acquires the input value and asigns it as a variable; num.
let num = Number(document.getElementById("decimal-input").value);

// Establishes three arrays; a list of numerals, their equivalent decimal value, an empty array to receive the result.
const numeralArray = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M' ];
const numberArray = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ];
let numeralProduct = [];

// Iterates down through the decimal array until num is greater than or equal to the index. The respective index is used to push a numeral to an empty array, while decreasing the value of num by that of the numberArray value at index. This process loops until num is less than the index and then continues with the parent loop.
for (let i = numberArray.length; i >= 0; i--) {
    while (num >= numberArray[i]) {
        numeralProduct.push(numeralArray[i]);
        num = num - numberArray[i];
    }
}

// The result numerals that were pushed to numeralProduct are converted to a string and returned as a HTML output on the page.
let result = numeralProduct.join("");
document.getElementById("numeral").innerHTML = result;

}