// objects.js

// what if i want to story a learner as variable, and they have name, contact information, class name, grades
// the example that we'll use from the notes is a vehicle
//      a vehicle can have a lot of different types of information that we want to store
// an object is a noun that is more complicated than a string, a number, or a boolean
// you declare them the same way: using const, let, ... (var is used but you should avoid it)
// what is unique is that you use {} to denote that it's an object
// with an object, everything inside the {} has to follow a specific notation
//  everything will have key-value pairs
//      a value can be any variable type: string, number, boolean, array, another object...
//      each key must be unique
const vehicle = {
    color: 'blue',
    // hp: 4000,
    year: 1989,
    'active registration': true,
    // color: 'red',
    engine: {
        cylinders: 6,
        hp: 4000,
        size: 3.2
    }
}

// console.log(vehicle);

// each key-value pair can be accessed individually
// this is dot notation
// console.log(`this color is: ${vehicle.color}`);
// console.log(`the car has ${vehicle.hp} hp`);
// console.log(vehicle.year);
// this is bracket notation, which is used when there is a space
//      it's also used with variables - when they key name is stored in a variable
// console.log(vehicle["active registration"]);
// console.log(vehicle['year']);


/*
    accessing and changing object properties
*/
// i want to change the color of the car, you can do that by assigning the existing key a new value
// ***** changing a value in a key-value pair
vehicle.color = 'silver';
// console.log(vehicle);
// ***** adding a new attribute by adding a new key-value pair
vehicle.model = 'civic';
vehicle.model = 'Civic';

// console.log(vehicle);

// if there are no quotes in bracket notation, you are trying to use a variable for the key
// console.log(vehicle['color']);

// ***** deleting a key-value pair
delete vehicle['active registration'];
// console.log(vehicle);

// ***** iterate through the object using a for..in loop
// vehicleKey is a variable that I name to describe eachkey while I go throught the loop
// vehicle is the object that I am iterating through
for (const vehicleKey in vehicle) {
    console.log(vehicleKey);
    console.log(vehicleKey, ':', vehicle[vehicleKey]);
}

// how do I access cylinders once I adde the object engine
console.log(vehicle.engine.cylinders);

console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));

// what variable would I use?
// the name of my cat? a string
let catName = 'Arrow';
// the age of my cat? a number
let catAge = 4;
// my cat's favorite things? an array
const favoriteThings = ['food', 'toys', 'blankets', 'keyboards'];
// can my cat speak French? boolean
let speaksFrench = false;
// can my cat solve a Rubik's cube? boolean
let solveCube = false;
// one variable to describe my cat? object
const myCat = {
    catName: 'Arrow',
    catAge: 4,
    favoriteThings: ['food', 'toys', 'blankets', 'keyboards'],
    speaksFrench: false
}

console.log('======================================================================');
console.log(myCat);
console.log(myCat.catName);
console.log(myCat.favoriteThings);
console.log(myCat.favoriteThings[2]);
console.log('======================================================================');

const myCats = [
    {
        catName: 'Arrow',
        catAge: 4,
        favoriteThings: ['food', 'toys', 'blankets', 'keyboards'],
        speaksFrench: false
    }, 
    {
        catName: 'Horatio',
        catAge: 8,
        favoriteThings: ['food', 'food', 'blankets'],
        speaksFrench: false
    },
    {
        catName: 'Bud',
        catAge: 1.5,
        favoriteThings: ['food', 'toys', 'plastic'],
        speaksFrench: false
    },
    {
        catName: 'Spot',
        catAge: 1.5,
        favoriteThings: ['food', 'toys', 'people', 'keyboards'],
        speaksFrench: false
    }
]

console.log(myCats);
console.log('======================================================================');
console.log(myCats[1]);
console.log('======================================================================');
console.log(myCats[1].catAge);

console.log('======================================================================');
// we know how to iterate through an array
for ( const cat of myCats) {
    console.log(cat.catName);
    // each cat is an object
    // you can iterate through that using
    // for (const key in cat)
}