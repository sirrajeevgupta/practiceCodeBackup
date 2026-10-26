//!     JavaScript let
var x = 10;
// Here x is 10
//console.log(x)
{
    let x = 2;
    // Here x is 2
    // console.log(x)
}
// Here x is 10
//console.log(x)


//!     JavaScript const
var x = 10;
// Here x is 10
{
    const x = 2;
    // Here x is 2
}
// Here x is 10



//!     Arrow Functions
/* Arrow functions is a short syntax for writing function expressions. You don't need the function keyword, the return keyword, or the curly brackets.
Note:
Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used. */

let myFunction = (a, b) => a * b;


//!    Object Destructuring
/*Destructuring assignment makes it easy to assign array values and object properties to variables.
Note:
When destructuring an object, you must use the same name for the variables as the corresponding object keys (names).
The order of the keys (names) does not matter.*/

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;


//!     The Spread (...) Operator
//The ... operator spreads an array or iterable into individual elements.

//The ... operator can pass arguments to a function:
const numbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];


//!     The For/Of Loop
/*The JavaScript for/of statement loops through the values of iterable objects.
for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

The for/of loop has the following syntax:

for (variable of iterable) {
  // code block to be executed
}
variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties. */

//Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
    text += x + " ";
}

//Looping over a String
let language = "JavaScript";
let text1 = "";

for (let x of language) {
    text1 += x + " ";
}


//!     JavaScript Maps
/*A Map is an object that stores key-value pairs, similar to objects, but with differences:

    Keys can be of any data type (objects, functions, primitive values), unlike plain objects where keys are strings.
    Maintains the original insertion order of keys.
    Being able to use an Object as a key is an important Map feature. */

const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
fruits1.set("kiwi", 900)
//console.log(fruits1)


//!     JavaScript Sets
/*A Set is an object that stores unique values of any type (primitive values, functions, objects).
A Set can only contain unique values. An attempt to add a duplicate value will be ignored.*/

// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");


//!     JavaScript Classes
/* JavaScript Classes are templates for JavaScript Objects. A JavaScript class is not an object. It is a template for JavaScript objects.
Use the keyword class to create a class.
Always add a method named constructor() */

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);


//!     JavaScript Promises
/*A JavaScript Promise is an object representing the completion or failure of an asynchronous operation and its values.
It is a placeholder for a value that may not yet be available, providing a structured way to handle asynchronous code. */

const myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);


//!     The Symbol Type
/* A JavaScript Symbol is a primitive data type just like Number, String, or Boolean.
It represents a unique "hidden" identifier that no other code can accidentally access.
For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
Symbols are always unique. If you create two symbols with the same description they will have different values:
Symbol("id") == Symbol("id"); // false
Using Symbol() to create a unique identifiers, solves below example problem: */

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let id = Symbol('id');
person1[id] = 140353;
//console.log(person1.id)  // but person.id is still undefined
//console.log(person1[id]) // Now person[id] = 140353


//!     Default Parameter Values
// ES6 allows function parameters to have default values.

function myFunction2(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
//myFunction2(5); // will return 15


//!     Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let xx = sum(4, 9, 16, 25, 29, 100, 66, 77);


//!     String.includes()
//The includes() method returns true if a string contains a specified value, otherwise false:

let text2 = "Hello world, welcome to the universe.";
text2.includes("world")    // Returns true


//!     String.startsWith()
// The startsWith() method returns true if a string begins with a specified value, otherwise false:

let text3 = "Hello world, welcome to the universe.";
text3.startsWith("Hello")   // Returns true


//!     String.endsWith()
// The endsWith() method returns true if a string ends with a specified value, otherwise false:

var text4 = "John Doe";
text4.endsWith("Doe")    // Returns true


//!     Array entries()
// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

const array = ["a", "b", "c"];

const iterator = array.entries();

//console.log(iterator.next().value); // Expected output: Array [0, "a"]
//console.log(iterator.next().value); // Expected output: Array [1, "b"]

const a = ["a", "b", "c"];

for (let [index, value] of a.entries()) {
    //console.log(index, value) 
}
// 0 'a'
// 1 'b'
// 2 'c'

const array1 = ["a", "b", "c", "d"];
const arrayEntries = array1.entries();

for (const element of arrayEntries) {
    //console.log(element);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']


//!     Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

const newArray = Array.from(array1)   // Returns ['a', 'b', 'c', 'd']
const newArray2 = Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
//console.log(newArray2)


//!     Array keys()
// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

const array2 = ["a", "b", "c"];
const iteratorr = array2.keys();

//console.log(iteratorr) // returns  Array Iterator {}
for (const key of iteratorr) {
    //console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

//Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
//console.log(sparseKeys); // ['0', '2']
//console.log(denseKeys); // [0, 1, 2]


//!     Array find()
/* The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
Note that the function takes 3 arguments:

The item value
The item index
The array itself    */

const array3 = [5, 12, 8, 130, 44];
const found = array3.find((element) => element > 10);
//console.log(found); // Expected output: 12


//!     Array findIndex()
/* The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
Note that the function takes 3 arguments:

The item value
The item index
The array itself */

const array4 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
//console.log(array4.findIndex(isLargeNumber)); // Expected output: 3


//!     Modules
// Modules are imported in two different ways:

//*Import from named exports
//*Import named exports from the file person.js:

//import { name, age } from "./person.js";

//* Import from default exports
//* Import a default export from the file message.js:

//import message from "./message.js";


//!     JavaScript Reflect
/* Before Reflect, object operations were scattered:
    Using the keyword in
    Using the keyword delete
    Using methods like Object.defineProperty
    Using language mechanisms like [[Get]] and [[Set]]

Reflect brings all these into clean Reflect methods.
    Reflect methods unifies everything
    Reflect methods has predictable behavior
    Reflect methods works perfectly with Proxy */

//* Reflect.has()
// Create an Object
const personn = { name: "John", lastname: "Doe" };
let answer2 = Reflect.has(personn, "name");
//console.log(answer2)  //returns true

//Same as using the in operator:

let answer3 = "name" in personn;
//console.log(answer3)  //returns true


//!     JavaScript Proxy
// Create an Object
const user = { name: "Jan", age: 40 };

//Create a Proxy
const proxy = new Proxy(user, {
    get(target, property) {
        //console.log("Getting: " + property);
        return target[property];
    },
    set(target, property, value) {
        //console.log("Setting: " + property);
        return target[property];
    }
});

proxy.name = "John";
let textt = proxy.name;