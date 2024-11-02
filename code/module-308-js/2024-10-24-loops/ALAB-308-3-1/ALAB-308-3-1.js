/*
    ***** PART 1 PROBLEMS *****
*/
let number1 = 0;
while (number1 < 35) {
    console.log(number1);
    number1 += 3; // Increment by 3 to get the next multiple
}
let number2 = 0;
while (number2 < 35) {
    console.log(number2);
    number2 += 3; // Increment by 3 to get the next multiple
}
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");

    } else if (i % 5 === 0) {
        console.log("buzz");

    } else {
        console.log(i);
    }
}
/*
    ***** PART 2: Prime Time Problems *****
*/
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//prime
let isPrime = false;
let number = 0;
//
while (!isPrime) {
    number++;
    if(number ==2) {
        console.log(number + " is Prime Number");
        isPrime=true; }
    else{
    if (number > 1) {
        for (let i = 2; i <= number-1; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
            else {
                isPrime = true;
            }
        }
    }
    if (isPrime) {
        console.log(number + " is Prime Number");
    }
    }
}