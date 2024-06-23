/* How to reverse a string

The split() method splits a string into an array of substrings, and returns the new array.

reverse() method reverses an array in place.
first array element becomes the last, and the last array element becomes the first.

join() method creates and returns a new string by concatenating all of the elements an array 
(or an array-like object), separated by commas or a specified separator string.


How to reverse a string:

1. Write a function which takes the argument of a string and returns another string which holds reverse order
of characters of the original argument string.

2. Call the function in the console and test your solution with the argument 'the universe is amazing'
*/

// Solution 1:
function reverseString(str){
    return str.split('').reverse().join(''); //quotations in .join() to get rid of commas in the solution.
}

console.log("Solution 1:", reverseString('the universe is amazing'));

// Solution 2
function reverseString2(str){
    let revStr = "";
    for(let i = str.length - 1; i > -1; i--){
        revStr += str[i];
    }
    return revStr;
}

console.log("Solution 2:", reverseString2('the universe is amazing'));



/* What is a factorial - JavaScript (Probability Calculations) 

What is factorializing a number and why is this valuable?

Factorials help us to calculate probabilities

Consider having combination of puzzle pieces and you'd like to know all the possible combinations that these
pieces could form.

['puzzle piece 1', 'puzzle piece 2',  'puzzle piece 3']

A factorial, by definition, is the product of all positive integers less than or equal to n.

Factorials in math are denoted with the shorthand notation: n!

Example 1: what is factorial of 4
n!, n = 4, 4! = 4 * 3 * 2 * 1 = 24


Exercise: What is a factorial - javaScript

1. Declare a function called factorialize which takes a number as an argument.
The function should return the factorial product  of the number.

I.e:  5! = 120 etc

2. Call the function in the console and pass in 7 as the argument and log out the result.
*/

function factorialize(num){
    // If num = 0 or num = 1, the factorial will return 1. Use an if statement for that
    if(num == 0 || num == 1){
        return 1;
    }

    // we start the for loop with i = 4
    // We decrement i after each iteration

    for(let i = num - 1; i >= 1; i--){
        num *= i;
    }
    /*                num      let i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
    return num;
}
console.log("factorial solution 1:", factorialize(5));

function factorialize2(num){
    let product = 1;
    for(let i = 1; i <= num; i++){
        product *= i;
    }
    return product;
}

console.log("factorial solution 2:", factorialize2(5));