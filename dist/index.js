"use strict";
// Source: https://www.youtube.com/watch?v=BCg4U1FzODs&ab_channel=TraversyMedia
// Basic Types:
let id = 5;
// console.log('ID:', id)
let Company = 'Solution Mission';
let isPublished = true;
let x = 'Assalam u Alaikum';
x = 3;
// Array:
let ids = [1, 2, 3, 5, 8];
let arr = [1, 'Muhammad Eiman Iqrar', true];
// Tuple's:
let person = [1, 'Makkah', true];
// Tuple Array:
let employee = [
    [1, 'Muhammad Eiman Iqrar'],
    [2, 'Muhammad Rumman Iqrar'],
    [3, 'Muhammad Azan Iqrar'],
];
// Unions:
let pid;
pid = 22;
// Enum's:
// Numeric
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// String
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Muhammad Eiman Iqrar',
};
// Type Assertion:
let cid = 1;
// Two Ways: to do Type Assertion:
// let customerId = <number>cid
// let customerId = cid as number
// Functions:
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Muhammad Eiman Iqrar',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const eiman = new Person(1, 'Muhammad Eiman Iqrar');
const rumman = new Person(1, 'Muhammad Rumman Iqrar');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Muhammad Eiman Iqrar', 'Developer');
// console.log(emp.register())
// Generics:
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let strArray = getArray(['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta']);
