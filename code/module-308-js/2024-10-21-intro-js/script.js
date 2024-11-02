// console.log('hi');
// console.log('i can put whatever i want here');

// single line comment
// anything after this is part of my single line comment
// i need to put that // at the start of every new line

/*
    ========== THIS IS A MULT-LINE COMMENT
    as long as I'm typing between the start and stop
    characters, the interpreter (computer as its running) won't
    try to run these lines
*/

/*
    In general, I use multi-line comments to separate sections of notes
*/


// i use single line comments for notes
// and to comment out code we don't want to run

// we can use console.log() to show the progression of our script running
// console.log('this will run');
// we will use them for debugging as we go through.

// console.log('words go here');

/*
    ========== Reserved Words and Keywords ==========
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
//      ***** Identifiers
let num = 5;
// console.log(num);
// ***** If you uncomment the line below, it will cause an error because var is reserved
// let var = 7;
let num2 = 6;
let num3 = 8.9;
var num4 = 20;
const newWord = 'fine';
// ***** this is another reserved word
// const super = 'what?';
// console.log(num4);
// console.log(newWord);
// console.log('5');

/*
    ========== console.log() ==========
*/
// ***** for console.log(), we need strings or variables (or numbers) in the (),
//          ***** we can also use numbers or booleans
// console.log(this won't work)
// console.log('string need to be in quotes');
// console.log("double quotes also work");
//  ***** this string closes with the apostrophe/single quote in won't
// console.log('this won't work')
// console.log("this won't work");
// console.log('this won\'t work');
// console.log('double quotes are "similar"');
//  ***** this works because it's a number
// console.log(223);
// console.log('223');
//  ***** this works because it's a boolean
// console.log(true);
// console.log('true');

/*
    ========== Data Types ==========
*/
//  ***** First, let's list all of the data types
//      ***** Numbers - all numbers (integers and floats (decimals))
//      ***** Strings 
//      ***** Boolean - true/false
//      ***** Null - does not belong to any data type from above
//          Its purpose is to indicate that there is no value
//          Null is an empty or non-existent value, and must be assigned
//      ***** Undefined - indicated that a variable has not been assigned a value or null.
//          Variables are often declared without a value.
//          The value could be something that has yet to be defined or calculated or somethign that will be input by a user.
//      ***** Objects
//      ***** Arrays

/*
    ========== Variable Declarations =========
    In order to show examples, we need to know how to DECLARE a variable
    Variable declarations create the space in memory for the variable and 
        give a name that we use to access that variable
    variable declarations can use one of three keywords: const, let, var
    *****   var and let variables can be changed, but the difference is _scope_
    *****   const is not reassignable with PRIMITIVE data types
    we will talk more about scope later, but you should use _let_ rather than _var_
*/
// *****    examples:
var stringOne = 'this is a string example';
let stringTwo = 'this is another string example';
const stringThree = 'this is a constant string example';
// ***** notice that stringThree is a different color than the others because it is a constant
// ***** notice that there are no spaces in the variable names,
//          we are using camel case, where the first letter of every word after the first is capitalized
//              stringThreeAndBeyond
//          we used kebab case in html (string-three)
//          there is also pascal case (StringThree)
//          and snake case (string_three)
console.log(stringOne);
console.log(stringTwo)
console.log(stringThree);
stringOne = 'new words';
console.log(stringOne);
// stringThree = 'new words';
// when we write constants, the variable name is usually all uppercase
const PI = 3.141592653589793;

// =========== side note ==========
//  typeof returns a value but we need to console.log() or save it in a variable to do anything with it
console.log(typeof stringOne);
let stringType = typeof stringOne;
console.log(stringType);

/*
    ========== typeof() ==========
*/
// ***** using the variables that we already declared and initialized check the type of value 
//              that was assigned to each variable
// ***** we need to console.log() so that we can see what typeof returns
console.log('===============================================================================');
console.log('===== typeof examples =====');
console.log(typeof(num));
console.log(typeof(num3));
console.log(typeof(stringOne));
console.log(typeof(stringThree));
console.log(typeof(brandNewVar));
let notInitVar;
console.log(typeof(notInitVar));

// ***** what is the difference between the last two?
// ***** SCOPE
//      https://www.programiz.com/javascript/variable-scope#:~:text=Note%3A%20In%20JavaScript%2C%20var%20is,visit%20JavaScript%20let%20vs%20var
brandNewVar = 7;
notInitVar = 7;
console.log(brandNewVar);
console.log(notInitVar);
console.log(typeof brandNewVar);
console.log(typeof notInitVar);


/*
    ========== Arithmetic Operators ==========
*/
// ***** The + operator, which returns the addition of two values
//          e.g.    3 + 4 returns 7
// ***** The - operator, which returns the difference of two values
//          e.g.    3 - 2 returns 1
// ***** The * operator, which returns the multiplication of two values
//          e.g.    6 * 4 returns 24
// ***** The / operator, which returns the division of two values
//          e.g.    16 / 2 returns 8
// ***** the % (modulo or mod) operator, which returns the remainder after division of two values
//          e.g.    14 % 3 returns 2 because 14 divided by 3 equals 4

console.log('===============================================================================');
console.log('===== arithmetic examples =====');
console.log(3+4);
console.log(3-2);
console.log(6*4);
console.log(16/2);
console.log(14%3);

// ***** If I don't console.log() or save my answer to a variable, then it is lost or gone. 
//          so, we generally create a variable to be able to store the answer
// ***** create the variable
let answer;
// ***** assign the return value to the variable
answer = 3 + 4;
console.log(answer);

// ***** some examples
let math1 = 10;
let math2 = -1;
let math3 = 9;
let math4 = 0;
let math5 = 2;

// ***** adding with + 
console.log('we are adding');
console.log(math1 + math2);
console.log(math3 + math4);

// ***** subtracting with -
console.log('we are subtracting');
console.log(math4 - math1);
console.log(math1 - math3);

// ***** multiplying with *
console.log('we are multiplying');
console.log(math1 * math5);
console.log(math2 * math5);
console.log(math1 * math4);

// ***** dividing with /
console.log('we are dividing');
console.log(math1 / math5);
console.log(math3 / math5);
console.log(math1 / math4);

// ***** finding the remainder with %
console.log('we are finding the remainder with mod');
console.log(math1 % math5);
console.log(math3 % math5);
console.log(math1 % math3);
console.log(math3 % math1);
console.log(math1 % math4);

/*
    ========== shortcuts for the arithmetic operators ==========
*/
console.log('===============================================================================');
console.log('===== shortucts for arithmetic operators examples =====');

let newNumber = 10;
newNumber = newNumber + 1;  // replace the value with the initial value + 1
console.log(newNumber);

newNumber = 10;
newNumber += 1;
console.log(newNumber);

// this works for all 5 operators and any number
newNumber = 9;
newNumber -= 3; // replace the value with 9 (the original value) - 3
console.log(newNumber);
newNumber /= 3; // 6/3 = 2, so I expect newNumber to be 2
console.log(newNumber);
newNumber *= 3; // newNumber is now 6
console.log(newNumber);
newNumber %= 3; // newNumber is now 0
console.log(newNumber);

// ***** This next shortcut only works for +1 and -1
//      There is an even more special shorthand
//      instead of += 1, you can use ++
//      instead of -= 1, you can use --
newNumber++;
console.log(newNumber);
newNumber--;
console.log(newNumber);

/*
    ========== Comparison Operators ==========
        ========== where we use booleans the most often ==========
*/
// ***** these operators all return true or false
console.log('===============================================================================');
console.log('===== comparison operator examples =====');

// *****        >   is strictly greater than
console.log('>');
console.log(5 > 4);
console.log(4 > 4);
console.log(4 > 5);

// *****        >=   is greater than or equal to
console.log('>=');
console.log(5 >= 4);
console.log(4 >= 4);
console.log(4 >= 5);

// *****        <   is strictly less than
console.log('<');
console.log(5 < 4);
console.log(4 < 4);
console.log(4 < 5);

// *****        <=   is less than or equal to
console.log('<=');
console.log(5 <= 4);
console.log(4 <= 4);
console.log(4 <= 5);

// ***** There are three different operators using =
// *****        =   is the assignment operator
// *****        ==  is loosely equals - checks if two values are equal to each other
// *****        === is strictly equals - checks if two values and the types are equal to each other
console.log('==');
console.log(3 == 3);
console.log(3 == '3');
console.log('3' == '3');

console.log('===');
console.log(3 === 3);
console.log(3 === '3');
console.log('3' === '3');

console.log('adding a string to a number');
// this is an example of concatentation
console.log("3" + 1);

// ***** There is also != and !==
console.log('!=');
console.log(3 != 3);
console.log(3 != '3');
console.log('3' != '3');

console.log('!==');
console.log(3 !== 3);
console.log(3 !== '3');
console.log('3' !== '3');

/*
    ========== Logical Operators ==========
*/
// *****    &&  - AND
// *****        both things (or all of the things) need to be true
console.log('the AND (&&) output');
console.log('everything that I was looking at is true if i see true');
console.log((3 > 1) && (9 == 9)) // both are true
console.log((3 > 1) && (9 == 0)) // the first is true but the second is not
console.log((3 < 1) && (9 == 9)) // the first is false but the second is true
console.log((3 < 1) && (9 == 0)) // they are both false

// *****    ||  - OR
// *****        ANY thing can be true for this to be true
console.log('the OR (||) output');
console.log('at least one thing is true if i see true');
console.log((3 > 1) || (9 == 9)) // both are true
console.log((3 > 1) || (9 == 0)) // the first is true but the second is not
console.log((3 < 1) || (9 == 9)) // the first is false but the second is true
console.log((3 < 1) || (9 == 0)) // they are both false

// *****    !   negation operator
console.log('negation');
console.log(!true);     // false
console.log(!false);    // true

/*
    ===== String Concatenation =====
*/
console.log('=======================================================');
console.log('===== String concatenation examples =====');
console.log("Hello" + "world") // outputs: Helloworld
console.log("Hello" + " " + "World") // outputs: "Hello World"
console.log("Hello","World") // outputs: "Hello World"
console.log("The number is: " + 5); // outputs: "The number is: 5"
console.log(5);


/*
    template literals
*/
let tempLit = 25;
console.log('this is my variable tempLit: ' + tempLit);
console.log('this is my variable tempLit:', tempLit);
// ***** template literals allow you to combine variables with those strings (literals)
//              ***** this ONLY works with backticks ` (key to the left of the 1)
//                  NOT ' or "
console.log(`this is my variable tempLit: ${tempLit} and then I'm going to talk about it more`);
console.log("this is my variable tempLit: ${tempLit} and then I'm going to talk about it more");