/* Uppercase - Capitalize letters in strings - JavaScript

When you cycle through string and wish to format the text it helps to consider a breakdown of components

IE string: 'a bunch of words'

C1: 'a', C2: 'bunch', C3: 'of', C4: 'words'

PC: ['a', 'bunch', 'of', 'words']

.split(): The split method divides a string into an ordered list of substrings and then puts them into
an array and returns the array.

1. Write a function titleCapitalize which can take any string as an argument and return
only the first letter of each word in the string capitalized. 

Ex:
input: 'asdGasdg asdg sdg SDJHFKSDFJ sadf'
output: 'Asdgasdg Asdg Sdg Sdjhfksdfj Sadf'

2. Write a second function sentenceCapitalize which can take any string as an argument
and return only the first letter of the first word in the string capitalized. 

Ex:
input: 'it is a SUNNY wedneSday morning right now'
output: 'It is a sunny wednesday morning right now'

3. Call and log titleCapitalize with the following argument: 'the future is now'

4. Call and log sentenceCapitalize with the following argument: 'hello, my friend'
*/

// Exercise Solution 1:
function titleCapitalize(str){
    str = str.toLowerCase(0).split(" ");
    for(let i = 0; i < str.length; i++){
        // console.log(str);
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        //console.log(str);
    }
    return str.join(" ");
}

console.log("Exercise Solution 1:", titleCapitalize("the future is now"));


// Exercise Solution 2:
function sentenceCapitalize(str){
    return str && str[0].toUpperCase() + str.slice(1);
};

console.log("Exercise Solution 2:", sentenceCapitalize('hello, my friend'));
