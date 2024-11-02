// console.log('this runs');

/*
    ========== ARRAYS   ==========
/   arrays are declared using [], that creates a list of items
/   the items should be the same data type, but JS does not restrict this
/   in this example, the elements are all strings
*/

const names = ["John", "Abagail", "Jerome", "Cynthia"];
// greetings is also an array, but it's empty, so we don't know what type
// is going to be listed in there
const greetings = [];

// we can declare arrays as const and then change the values because this 
// creates a variable that is always an array but what the array holds can change

// console.log(names);
// console.log(names.length);
// console.log(greetings);
// console.log(greetings.length);

// this for loop is just like the for loops that we looked at before
// the difference is that we are using the built-in length property, which gives us the length of the array

for (i=0; i<names.length; i++) {
    // console.log(`the name is: ${names[i]}`);
    // console.log('the name is:', names[i]);
    greetings[i] = "Hello, " + names[i] + "!";
    // console.log(greetings[i]);
}

// console.log(greetings);

// this would be time consuming and wouldn't work if we don't know the size of the array ahead of time
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// Exercise
// demonstration of using let
// let movies = ['Pitch Perfect', 'Legion', 'Prey'];
// console.log(movies[1]);
// movies = 7;
// console.log(movies);

const movies = ['Pitch Perfect', 'Legion', 'Prey'];
// console.log(movies[1]);
// movies = 7;
// accessing the entire array
// console.log(movies);
// accessing the first array element
let firstMovie = movies[0];
// console.log(firstMovie);

// console.log('for .. in');
// for (const i in movies) {
//     console.log(i)
//     console.log(movies[i]);
// }
// console.log('for .. of');
// for (const movie of movies) {
//     console.log(movie);
// }

// update an array using the index
movies[1] = 'Batman';
// console.log(movies);
// be careful using this because you can create an element far away from the others
// movies[10] = 'Interstellar';
// console.log(movies);

// you can use the length property to add to the end of the array
// length was 3, so the '' goes in the 3 position
// but counting starts at 0
movies[movies.length] = 'Interstellar';
// console.log(movies);

// built-in array methods
// https://www.w3schools.com/js/js_array_methods.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// push()
// pop()
// what does push() do?
// adds to the end of my array
movies.push('Titanic', "Minions");
// console.log(movies);
// what does pop() do?
// removes the last element of the array
movies.pop();
// console.log(movies);
movies.push('Minions');
// console.log(movies);
// if you push an array onto an array, it will be added as an embedded array
// movies.push(['Casablanca', 'Star Wars', 'Rush Hour']);
// console.log(movies);

// this won't work but there are some methods that you can chain
// movies.pop().push('Minions 2');
// console.log(movies.pop());
// console.log(movies);

// shift()
// unshift()
// what does shift() do?
// it removes the first element of the array
movies.shift();
// console.log(movies);
// what does unshift() do?
// it adds an element to the beginning of the array
movies.unshift('Pitch Perfect');
// console.log(movies);

// concat()
// join()
// slice()
// splice()
// reverse()
// sort()

// ==========   EXAMPLES    ==========
// concat() - joins arrays together
const moreMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];
const allMovies = movies.concat(moreMovies, moreMovies);
// console.log(allMovies);

// join() - takes an array and returns a string with the elements
// console.log('join with no argument');
// console.log(movies.join());
// console.log('join with (" * ")');
// console.log(movies.join(' * '));
// console.log('join with (" ===== ")');
// console.log(movies.join(' ===== '));

// slice()
// returns the 4 spot (or after the 4th element) and on
// console.log(movies.slice(4));
// console.log(movies);
// console.log(movies.slice(2, 4));
// console.log(movies);
const someMovies = movies.slice(2, 4);
// console.log(someMovies);

// console.log(...movies);

// these point to the same memory location
const movies2 = movies;
console.log('movies2');
console.log(movies2);
console.log('movies');
console.log(movies);
movies2.pop();
console.log('movies2');
console.log(movies2);
console.log('movies');
console.log(movies);

// these are two different arrays that start out with the same elements
const moviesCopy = [...movies];
console.log('moviesCopy');
console.log(moviesCopy);
console.log('movies');
console.log(movies);
moviesCopy.pop();
console.log('moviesCopy');
console.log(moviesCopy);
console.log('movies');
console.log(movies);