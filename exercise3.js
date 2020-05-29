//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 

function checkEmptyString(str) {
    return str ? false : true;
}


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

let str = 'Learning JavaScript is fun!';

str = str.replace('fun', 'cool');


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 

function arrNumSq() {
    const arr = [1, 2, 3, 4, 5];
    return arr.map((val) => {return Math.pow(val, 2)});
}


/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.

    const arr = [1, 3, 5, 7, 9, 1, 3, 5];
    const newArr = arr.filter(ele => (ele > 3));


/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

const arrNum = [1, 3, 5, 7, 9, 25];

const sumOfArrNum = arrNum.reduce((prev, curr) => {return prev + curr});


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

function dnaStrand(strDna) {
    const arr = [];
    let char = '';    
    for(let i = 0; i < strDna.length; i++) {
        char = strDna.charAt(i);
        switch(char) {
            case 'G':
                arr.push('C', char);
                break;
            case 'T':
                arr.push('A', char);
                break;
            case 'g':
                arr.push('C', char.toUpperCase());
                break;
            case 't':
                arr.push('A', char.toUpperCase());
                break;
            default:
                break;
        }
    }
    return arr;
}


/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    const truthys = numbers.filter(el => el); // Step 1: rids falsy values
    const primitives = truthys.filter(n => typeof n != 'object'); // Step 2: rid of object values
    const noBools = primitives.filter(p => typeof p != 'boolean'); // Step 3: rid of boolean values
    const numStrings = ['zero', 'one', 'two', 'three'];
    const numWithStrings = noBools.map(nb => numStrings.includes(nb) ? numStrings.indexOf(nb) : nb); // Step 4: conver numbers as strings into a number 
    
    const parseNumWithStrings = numWithStrings.filter(nws => parseInt(nws));
    const nums = parseNumWithStrings.map(pnws => parseInt(pnws));

    console.log(Math.max(...nums));
}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    if (desc) {
        numbers.sort((a, b) => {return b- a});
    } else {
        numbers.sort((a, b) => {return a - b});
    }
    console.log(numbers);
};


/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set(objAsKey = {company : "TEKsystems"},"object"); // this line has now been refactored
mapObj.set(2020, 'number');
mapObj.set('hello', 'string');
mapObj.set([1,2,3], 'array');
mapObj.set(false, 'boolean');
mapObj.set(undefined, 'undefined');

console.log(mapObj.has({company : "TEKsystems"}));
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

console.log('The above console.log() in this problem is returning false because when we set an object as a key we need to provide a reference. If we don\'t we are setting one object as a key and will fail to successfuly reference that key when using the has method in Map because our argument for the has method is a completely new object even though it may seem as being the same since the values for both objects are the same i.e. {company : "TEKsystems"} === {company : "TEKsystems"} results to false.');


//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
const newMapObj = [];
mapObj.forEach((el) => {newMapObj.push(el)});
console.log(newMapObj);


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
const onesReversed = ones.slice().reverse();
console.log(ones);
console.log(onesReversed);


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    return cb();
}


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
const myName = 'Jose Moreno'
const injectHTMLGreeting = `<div id="greeting">
                                <h1>Hello my name is ${myName}</h1>
                            </div>`
document.querySelector('body').insertAdjacentHTML("afterbegin", injectHTMLGreeting);

// I learned this week of Multi-line Strings using template literals (backticks). I created a snippet of code above to best describe one reason why this feature is useful. 
// As you may see, the variable injectHTMLGreeting contains our multi-line string which in this multi-line format we clearly can see which HTML tags we are going to be adding to our html page. 