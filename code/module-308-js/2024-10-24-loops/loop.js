/*
    ========== TYPES OF LOOPS THAT WE WILL COVER ==========
        - for 
        - for .. in
        - for .. of 
        - while
        - do .. while
        - labeled statements
*/

/*
    ==========  for loops   ==========
*/
// *****    General Syntax:
//      for (initialization; condition; afterthough) {
//          statements to execute
//      }
// ***** initialization - have a starting condition using a variable
// ***** condition - value of that variable that causes us to consider this complete
// ***** afterthought - changing the value of the variable to step through the iterations

// start with i = 0
// check if i < 10
// if it is, then go in to the loop statements {}
//      after those are executed, increment by 1
// if i is not less than 10, you are done
for (let i=0; i<5; i++) {
    // console.log(i);
}

// you can have any initial condition, any condition to end, and you can change the variable however you want
for (let i=7; i>3; i--) {
    // console.log(i);
}

// this is an infinite loop - don't do this unless you really mean to
// for (;;) {
//     console.log('things')
// }

// for (let i=26; i>0; i -= 3) {
//     console.log(i);
//     if (i < 10 ) {
//         console.log('less than 10');
//     } else if (i < 20) {
//         console.log('less than 20');
//     }
// }

// ===================================================================
//
//      Exercises
//
// ===================================================================

// count down from 10 to 1
console.log('===== count down from 10 to 1 =====');
for (let i=10; i>=1; i--) {
    // console.log(i);
}

// output odd numbers from 1 to 10
console.log('===== output odd numbers from 1 to 10 =====');
for (let i=1; i<=10; i++) {
    if (i%2 === 1) {
        // console.log(i);
    }
}

console.log('===== another way =====');
for (let i=1; i<=10; i+=2) {
    // console.log(i);
}

// output even numbers from 1 to 10
console.log('===== output even numbers from 1 to 10 =====');
for (let i=1; i<=10; i++) {
    if (i%2 === 0) {
        // console.log(i);
    }
}

console.log('===== another way =====');
for (let i=2; i<=10; i+=2) {
    // console.log(i);
}

// output multiples of 3, starting at 6 and ending at 60
for (let i=6; i<=60; i+=3) {
    // console.log(i);
}

// output an increasing number of symbols
// ***** we need to declare outString outside of the for loop
//          so that it persists after an individual iteration.
let outString = '';
for(let i=0; i<7; i++) {
    outString = outString + '#';
    // console.log(outString);
}

// iteratates 1 to 20

for (i=1; i<=20; i++) {
    // prints even for even numbers
    if (i%2 === 0) {
        // console.log('even');
    }
    // prints odd for odd numbers
    if (i%2 === 1) {
        // console.log('odd');
    }
    // print out prime for all prime numbers
    //  5, 7, 11, 13, 17, 19
    if (i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
        // console.log("prime");
    }
}

console.log('===== another way =====');

// modifying the above to only print out one statement per number/iteration
for (i=1; i<=20; i++) {
    // print out prime for all prime numbers
    //  5, 7, 11, 13, 17, 19
    if (i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
        // console.log(i, "is prime");
    }
    // prints even for even numbers
    else if (i%2 === 0) {
        // console.log(i, 'is even');
    }
    // prints odd for odd numbers
    else if (i%2 === 1) {
        // console.log(i, 'is odd');
    }
}

/*
    ========== Looping through iteratables  ==========
    for .. in
    for .. of
*/
// what is an iterable?
//  something where you can go through each element individually
//      examples are strings, arrays, objects...

// ***** str.length this length property is a part of string, and it also is a part of arrays
//          it is useful because we don't always know the length of the array
//          so we can use this property
// const testStr = 'this will work for any length string';
// console.log(`__${testStr}__ has a length of ${testStr.length}`);
// ***** the [] notation is used when we want to access a specific element within a variable
//          remember that counting starts at 0
// console.log(testStr[5])

const str = "Hello World";
for (let i=0; i<str.length; i++) {
    // console.log(str[i]);
}

// ***** for .. in 
// like a for loop from above, where the built in condition is the length fo the string (or iterable we are using)
// and we go up by one each time
// ***** general syntax
//      for (const i in _iterable_variable_) { do some things }
//          this works with arrays and string but not objects
for (const i in str) {
    // console.log(str[i]);
}

// ***** for .. of
// this is similar but the notation is slightly different
// ***** general syntax
//      for (const _name_individual_variable_ of _iterable_variable_) { do some things }
//          this works with arrays and string and objects but was created for objects
for (const char of str) {
    // console.log(char);
}


/*
    ========== continue ==========
*/
// *****    continue ends the current iteration of the loop but continues the loop
for (let i=0; i<str.length; i++) {
    // console.log('in the loop', i);
    if (str[i] == 'l') {
        continue;
    }
    // console.log(str[i]);
}

/*
    ========== while loop ==========
*/
let x = 30;
while (x > 0) {
    x /= 2;
    x--;

    if (x % 1 != 0) {
        break;
    }

    console.log(x);
}

/*
    ========== Exercises ==========
*/

// count down to 0 from a given number 
let num1 = 3;
while (num1 > 0) {
    num1 -= 1;  // num1--;
    console.log('there is nothing special today it is just:', num1);
}

// log integers in multiples of 3 as long as they are less than 35
let num2 = 3;
while (num2 < 35) {
    console.log(num2);
    num2 += 3;
}

// print integers in multiples of 5 as long as they are less than 100
let num3 = 5;
while (num3 <= 100) {
    console.log(num3);
    num3 += 5;
}

// print integers between 0 and 20 with the following conditions
//      all numbers divisible by 2 should be multiplied by 3 before they are output
//      all other integers should not be output
let num4 = 0;
while (num4 <= 20) {
    console.log(num4);
    if (num4 % 2 == 0) {
        console.log(num4*3);
    }
    num4++;
}

// Romeo went to the vending machine to buy himself a cookie, which costs $4. 
//  He paid with a $10 bill, and the vending machine gave him his change in quarters.
// Write a loop that outputs how many quarters Romeo received.
// ***** think about how you would count back change, incrementally adding $.25 or convert $4 and $10 to cents

/*
    ========== do .. while loop ==========
*/
// ***** this is similar to the while () {} loop
//          the difference is that in do { something } while (condition), the "something" will happen at least once
//              in while (condition) { something }, the condition is always checked first, so the "something" will not always happen
x = 10;
do {
    x--;
    console.log(x);
} while (x>50);

// this will execute the console.log() once
do {
    console.log('this prints');
} while (false);

// this will never execute the console.log()
while (false) {
    console.log('this never prints');
}

