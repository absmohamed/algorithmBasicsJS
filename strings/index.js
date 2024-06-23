/* Another classics algorithm scripting challenge!
Program the computer to identify the longest word in a string!
We can do it with our minds and so why not ask our robot friends as well.

you are at a coding interview, the interviewer sits you down and asks you to find the longest word in a
string with JavaScript.

1. Declare a function longestWord which takes an input of a string and returns the longest word in the string.

It's up to you to impress them with your skills and land the golden job!
*/

function findLongestWord(str){
    let  strSplit = str.split(' ');
    let longestWord = 0;
    let word = '';

    for(let i = 0;  i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
            word = strSplit[i];
        }
    }
    return [word, longestWord];
}

console.log('longest word is:', findLongestWord("The llongestttttttt word shoulld be true"));

// Solution II
function findLongestWord2(str){
    let strSplit = str.split(' ');
    let longestWord = 0;
    let word = '';

    strSplit.forEach(function(strSplit){
        if(strSplit.length >= longestWord){
            strSplit.length = longestWord;
            word = strSplit;
        }
    })
    return word;
}

console.log('longest word in solution 2:', findLongestWord2("The longest word should be true"));




/* Return the smallest numbers in nested Arrays

let's challenge our ability to work with nested and multi-dimensional arrays as well as our understanding
of bracket notation.

Example 1: Math.min()
The Math.min() method returns the number with the lowest value.

Another tip: Math.max() returns the number with the highest value.
*/

const array = [1, 2, 3, 4, 5];

console.log('Example 1:', Math.min(...array));

/* Given the following multi-dimensional array:

const multiArray = [[234, 35, 2, 1], [53, 3, 6554, 4], [45, 632, 31, 566]];

1. Write a function smallestNumbers which takes a multi dimensional array as an argument and returns a new
array containing only the smallest integers from each sub array.

2. Log out the function and pass in multiArray as the argument.

*/
const multiArray = [[234, 35, 2, 1], [53, 3, 6554, 4], [45, 632, 31, 566]];

function smallestNumbers(arr){
    let newArr = [];

    for(let i = 0; i < arr.length;  i++){
        newArr.push(Math.min(...arr[i]));
        console.log(...arr[i]);
    }
    return newArr;
}

console.log('Solution for nested arrays', smallestNumbers(multiArray));


/* Repeat a string in JS
There are many ways you could go about repeating a string in JavaScript

'hello' repeat 4 times = 'hellohellohellohello'

The repeat() method is a nice trick introduced in 2015 among others.

1. Write a function repeatString which takes 2 arguments, a string and a number and return a new string
repeating the function's argument string as many times as the number argument specifies.

2. Log the result in the console.
*/

function repeatString(str, num){
    return str.repeat(num);
}

console.log('Exercise Solution:', repeatString("Kangaroo", 5));


// Solution 2 with iteration
function repeatString2(str, num){
    let array = [];
    for(let i = 0; i < num;  i++){
        array.push(str);
    }
    return array.join("");
}

console.log('Exercise Solution:', repeatString2("Kangaroo", 7));



/* how to truncate a string in JavaScript 

In mathematics and in comp science, truncation is limiting the number of digits to the right of a value.

let x = 'hello'
We can slice off the o to truncate x in order for it to equal = 'hell'

The slice() method in JS is an excellent tool for truncation.

Exercise Truncate - Paywall Text Algorithm: 

You're working at a Blob The Blog Blog company and they are putting up a 
paywall to restrict guest viewers from reading the full article. 

Truncate the text so that it only returns up to a maximum value and replaces the 
additional overflow with '...'

1. Write a function truncate which takes a string and number as arguments and returns
the string truncated determined by the value of the number argument. 

Ex: string = 'hello', num = 3 then expected output = 'hel'

2. Log the result in the console and pass in the arguments:
"Really important stuff you'll pay to read", 21
*/

function truncate(str, num){
    if(str.length >= num){
        return str.slice(0, num) + '...';
    }
    return str;
}

console.log('Exercise Solution:', truncate("Really important stuff you'll pay to read", 21))