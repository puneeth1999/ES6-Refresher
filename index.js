// var
// Global scoped. Available through the entire function or file. If used before declaration, you'll get "undefined"
var name = 'John';
console.log(name);


// const
// block scoped. Cannot re-declare the value - You can manipulate an object though
const name2 = 'Jack';
// name2 = 'reacher'; // Will throw an error for sure

const person = {
    fname: 'John',
    lname: 'Reacher'
}
person.fname = 'Jack';
console.log(person.fname, person.lname);

const nums = [1, 2, 3, 4, 5, 6];
console.log('count: ', nums.push(111));
console.log('nums', nums);


// let
// block scoped. can be re-assigned
let name3 = 'Jack';
name3 = 'Reacher';
console.log(name3);


// Arrow Functions
function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello('Bucky');
// converting sayHello into an arrow function below with the name sayHelloArrow
let sayHelloArray = name => console.log("Hello,", name);
sayHelloArray('Puneeth');


const fruits = ['Apples', 'Oranges', 'Grapes'];


// foreach
fruits.forEach(function(fruit, idx) {
    console.log(fruit, idx);
});
// foreach arroy function
fruits.forEach((fruit, idx) => console.log(fruit, idx));


// map
const singleFruits = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());
console.log(singleFruits);

// Filter
const people = [
    { id: 1, name: 'Karen' },
    { id: 2, name: 'Sharon' },
    { id: 3, name: 'Bob' }
];
// Let's say we wanna remove Bob. In react, state is immutable. So filter is used a lot there.
const people2 = people.filter((person) => person.id !== 2);
console.log(people2);


// Spread Operator - ...
const arr = [1, 2, 3]; // let's say I wanna add a new number to this.
const arr2 = [...arr, 4];
console.log(arr2);

let person1 = {
    name: 'Puneeth',
    age: 22
};
let person2 = {
    ...person1,
    email: 'Puneeth@puneeth.com'
};
console.log(person2);

// Combination of Spread and Filter
const arr3 = [...arr.filter((number) => number !== 2)]; // Removes 2 from arr
console.log(arr3);


// Destructuring
const profile = {
    fullname: 'John Doe',
    address: {
        street: 'St. Martin\'s',
        city: 'Riverdale'
    },
    hobbies: ['movies', 'books']
};
const { fullname, address, hobbies } = profile;
console.log(fullname, address.city, hobbies[1]);
const { street, city } = profile.address;
console.log(street);


// CLASSES
class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    greet = () => { return `Hello, my name is ${this.fname} and I am ${this.age}` };

}

const p1 = new Person('Puneeth', 'Choppanati', 22);
console.log(p1.lname, ',', p1.fname);
console.log(p1.greet());

// SUBCLASSES
class Customer extends Person {
    constructor(fname, lname, age, balance) {
        super(fname, lname, age);
        this.balance = balance;
    }
    info = () => { return `${this.fname} owes $${this.balance}` };
}
const romona = new Customer('romona', 'Danger', 21, 1800);
console.log(romona.info());