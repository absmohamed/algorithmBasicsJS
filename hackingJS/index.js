/* Hacking a Password with matching keywords in javascript

Finding matching values in javaScript is a very valuable algorithm with many uses.

Consider searching through an array of values and then testing each value to see if
it passes a truthiness test. this is an excellent method to match up values through
testing.

let x = 34,
let  y = [12, 324325325, 3523, 235, 35, 34...]
expected match = 34

Exercise - hacking a password with Matching keywords in JavaScript

0. Insert the following array into your solution script:
let keywordPossibilities = [
    'cat',
    'cold',
    'this',
    'is',
    'frame',
    'cutey',
    'hope'
];

1. Write a function called findMatch which takes 2 arguments: arr and a function.

2. findMatch should conditionally check whether the function argument given any strings
in the keywordPossibilities are true and if they are to then store the string into the
findMatch function and then finally return the stored string value.

3. If the string does not exist in the array then findMatch should return an error
message stating that there is no match in this file.

4. Log into the console findMatch passing in the keyword possibilities as the first
argument and an anonymous assertion function for the second argument.

Ex Anonymous function:
function(ar){
    return ar
}

5. The second argument (anonymous function) passed into the findMatch function should
take an argument of a string and return the following assertion:
(copy exactly from the description): return string + ' is a match' === 'this is a match';
*/

let keywordPossibilities = [
    'cat',
    'cold',
    'this',
    'is',
    'frame',
    'cutey',
    'hope'
];

function findMatch(arr, func){
    let word = '';
    for(let i = 0; i < arr.length; i++){
        if(func(arr[3])){
            word = arr[3];
            return word;
        }
    }
    if(word === ''){
        return 'Sorry, there is no match in this file!'
    }
}

console.log(findMatch(keywordPossibilities, function(string){
    return string + " is a match" === "cold is a match";
}));