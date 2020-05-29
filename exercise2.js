//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}

let i = 0;
while (i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

const firstMathExpr = function() {
    return (30 + 2) * 20;
};

const secondMathExpr = function (product) {
    return product / Math.pow(10, 2);
};

console.log(secondMathExpr(firstMathExpr()));


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!")};
// 125
// undefined
// ""

console.log(`Value ${20} is truthy because it is a number datatype corrosponding to a non-zero value`);
console.log(`Value ${0} is falsy because JS considers the zero value as falsy`);
console.log(`Value ${"zero"} is truthy because it is a string datatype that is not empty`);
console.log(`Value ${zero=20} is truthy because it is a number datatype that is corrosponding to a non-zero value, zero is just the name given to the const variable hence no effect to value`);
console.log(`Value ${null} is falsy because JS considers value null a falsy value`);
console.log(`Value ${"0"} is truthy because it is a string datatype that is not empty`);
console.log(`Value ${!""} is truthy because we have an empty string datatype which is falsy but we attached the logical not operator in front of it making the value revert to truthy`);
console.log(`Value ${{}} is truthy because {} gives us an object datatype which is considered truthy`);
console.log(`Value ${() => {console.log("hello TEKcamp!")}} is truthy because arrow function is returning the function itself as a callback`);
console.log(`Value ${125} is truthy because it is a number datatype corrosponding to a non-zero value`);
console.log(`Value ${undefined} is falsy because JS considers undefined value to be falsy`);
console.log(`Value ${""} is falsy because JS considers an empty string value to be falsy`);

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

switch(day) {
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!");
}


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;

age > 21 ? console.log("adult") : console.log("minor");

age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager");

age > 65 ? console.log("retired") : console.log("still working...");


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

const person = {
    name: 'Jose',
    age: '30',
    gender: 'female',
    hobbies: ['reading', 'coding', 'playing with family'],
    professsion: 'student',
    education: 'TEKcamp',
    
    learn: function() {
        console.log(this.name);
    },

    practice: function() {
        console.log(`${this.hobbies[1]} after learning.`);
    }
};


/************************************************************* */
// Problem 7: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  


const user123 = {
    userId: '123',
    username: 'jm123',
    name: 'Jose Moreno',
    email: 'moreno123@email.com',
    password: 'V3ryStr0ngP@ssword123',
    
    changeName: function(newName) {
        this.name = newName;
        console.log('name has beeen changed');
    },

    resetPassword: function(password) {
        if (this.password === password) {
            this.password = prompt('Enter new password below:');
            console.log('password has been successfully reset');
        }
        else {
            console.log('password could not be reset');
        }
    }
}


/************************************************************* */
//Problem 8: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

const favDataTypes = function() {
    const num = 2020;
    const str = 'zzzzz';
    const personObj = {
        name: 'Jose', 
        learn: function() {
            console.log(this.name + ' is learning!');
        }
    };

    return `Number datatype like ${num} is my first favorite datatype because I enjoy using numbers when doing Math. Second favorite datatype ${str} is string because this datatype has many cool functions that are built in ready-to-use like charAt and lastIndexOf. Third favorite datatype ${personObj} would be object because its like having a canvas when drawing/painting and you can use this datatype to describe objects in the real world.`;
}



/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

function multiple(x) {
    return function fn(y) {
        return x * y;
    }
}

console.log(multiple(multiple(3)((3)))(3));

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

const futureValue = function stockGain(basis) {
    const message = ' is how much the stock has increased'
    return function calculateAnnualGrowth(yrs) {
        const r = .05;
        console.log(basis * Math.pow((1 + r), yrs));
    }
};

futureValue(100)(5);
