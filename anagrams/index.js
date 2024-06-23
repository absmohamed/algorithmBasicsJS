/*
Anagrams - decoding mutation in javaScript

What if we had an array of two strings that held the exact same values except in a 
different order? How could we go about verifying whether they actually contained
the same values or not programmatically?

IE: 1. 'hello', 'olleh'
Expected: true
    2. 'word', 'friend'
Expected: false


Exercise - Write A Program to Solve Anagram Puzzles 

Someone stops you on the street and says, 'hey you! Can you please help me!'

Given the following Comparison List: 

1. 'dynamite' – 'mayitend'	
2. 'Statue of Liberty' – 'Sticky Bird free'
3. 'eleven plus two' – 'twelve plus one'	
4. 'dragon king' - 'going Darn'
5. 'the Morse Code' – 'here come dots'
6. 'the nudist colony' – 'no untidy clothes'

1. Create 6 arrays which contain two strings each. The first string in the array 
should be the first anagram string and the second string should be the second anagram string we are comparing.
IE: array1 = ['dynamite', 'mayitend'] 

2. Write a function which can determine whether the following phrase comparisons
are anagrams or not. If they are anagrams the function should return true
otherwise the function should return false!

*Be mindful to not add or change any spaces between phrases as we are not looking
at regex for this example and copy the strings in the description exactly as is.


1. 'dynamite' – 'mayitend'	
2. 'Statue of Liberty' – 'Sticky Bird free'
3. 'eleven plus two' – 'twelve plus one'	
4. 'dragon king' - 'going Darn'
5. 'the Morse Code' – 'here come dots'
6. 'the nudist colony' – 'no untidy clothes'
 */

let arr1 = ['dynamite', 'mayitend'];
let arr2 = ['Statue of Liberty', 'Sticky Bird free'];
let arr3 = ['eleven plus two', 'twelve plus one'];
let arr4 = ['dragon king', 'going Darn'];
let arr5 = ['the Morse Code', 'here come dots'];
let arr6 = ['the nudist colony', 'no untidy clothes'];

// Solution I

function decodeMutations(arr){
    let comp2 = arr[1].toLowerCase();
    let comp1 = arr[0].toLowerCase();

    for(let i = 0; i < comp2.length; i++){
        if(comp1.indexOf(comp2[i]) === -1)
            return false;
    }
    console.log('c1', comp1, 'c2', comp2);
    if(comp1.length === comp2.length){
        return true;
    } else{
        return false;
    }
}

console.log("Exercise Solution II", decodeMutations(arr4));



/* 
Chunking Arrays into Groups and Subarrays

the Slice Method can extract a slice from the beginning, middle, or end of an array for whatever purpose
you require, without changing the original array.

Exercise - Capture The Flag Groups of Teams

You are a working on a capture the flag style Call of Duty game
regardless whether you're into shooter types or not! :P 

Your boss comes up to you asks you to create a function that can
take an array of 6 players and divide them up evenly into 3 teams
each team containing its own sub array of two players.

1. Create an array called captureTheFlagPlayers and input the following
player string data:

["player 1", "player 2", 
"player 3", "player 4",
"player 5", "player 6"]

2. Write a function chunkPlayersIntoGroups which can take the 
captureTheFlagPlayers array as an argument and return the player data
divided into 3 even teams each containing its own sub array 
of two players each.

3. Call and log the function passing in the captureTheFlagPlayers array.

*/

let captureTheFlagPlayers = ["player 1", "player 2", "player 3", "player 4", "player 5", "player 6"];

function chunkPlayersIntoGroups(arr){
    let tempArr = [];
    let i = 0, chunk = 2;
    while(i < arr.length){
        tempArr.push(arr.slice(i, i + chunk))
        i += chunk;
    }
    return tempArr;
}

console.log(chunkPlayersIntoGroups(captureTheFlagPlayers));