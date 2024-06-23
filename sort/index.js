/*
Sort and Order numbers into an array in JavaScript.

The sort() method sorts the elements in an array in an order and returns the sorted 
array.

The default sort order is ascending, built upon converting the elements into strings, also comparing their
UTF-16 code units into values.

Ex: sort((a, b) => (a - b))

The compare function does the following:
if(a < b by some criteria) {
    return - 1
}

if(a > b by some criteria) {
    return 1
}

a === b then return 0

Example 1: What is the sort method in JavaScript
*/

let evenNumbers = [2, 8, 12, 6, 4, 10];

let randomLetters = ['b', 'e', 'a', 'c'];

console.log('Example 1', 
    evenNumbers.sort((a, b) => a - b),
    randomLetters.sort()
);

/*
Interview Challenge: Sort And Order Numbers into an Array 

You are at an interview you get asked the famous sort question but with a TWIST! duh duh duh

The interviewer wants to see if you can go above and beyond and asks you to not only sort a 
disordered array of numbers, but also insert any given number into the array in its correct
ordered position. 

IE array = [3,35,2,1] and num = 4
script expected output: [1,2,3,4,35]

Prove your valour and show this interviewer what you're made of ;) 

Before beginning, create a new array (numbersArray) under the 
Exercise Solution section of the template with the following numerical 
values in the given order: numbersArray = [120, 420, 12, 3, 24]

1. Write a a function called sortAndOrder which takes two arguments; an array and a number.

2. The function should sort ascendingly and evaluate any given array's numerical values 
as well as insert in order any number into the array provided by the number argument of the
sortAndOrder function. 

3. Call and log the function sortAndOrder passing in the arguments the 
numbersArray and the value 42.

4. Share you solution on the discord in the #alogrithms channel and rejoice victorious!
*/

numbersArray = [120, 420, 12, 3, 24]

function sortAndOrder(arr, num){
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= num){
            arr.splice(i, 0, num)
            break; //breakends the condition and lets the code end so there's no infinite loop.
        }
    }
    return arr;
}

console.log('Exercise Solution 1:', sortAndOrder(numbersArray, 42));


// SOlution II
function sortAndOrder2(arr, num){
    // concat
    arr.concat(num).sort((a, b) => a - b);
    return arr;
}

console.log('Exercise Solution 2:', sortAndOrder2(numbersArray, 42));