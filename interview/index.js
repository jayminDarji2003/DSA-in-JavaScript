// Interview preparation

// Question 1 :  what are the possible ways to create object in js

// a. object literal syntax
const obj = {
    name: "jaymin",
    age: 21
}
console.log(obj)

// b. Object constructor syntax
const obj2 = new Object();
console.log(obj2)

// c. Object.create() method
const obj3 = Object.create({
    name: "jaymin",
    age: 21
})
console.log(obj3)

let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
}
let carProps = {
    types: {
        value: "Volkswagen",
    },
    models: {
        value: 'Golf'
    }
}

const car = Object.create(vehicle, carProps);
console.log(car);

// d. function constructor
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.college = "KIM";
const obj4 = new Person("jaymin");

console.log(obj4);

// object.assign method
const orgObject = { company: 'XYZ Corp' };
const carObject = { name: 'Toyota' };
const staff = Object.assign({}, orgObject, carObject);
console.log(staff)

// using class constructor
class Student {
    constructor(name) {
        this.name = name;
    }
}

const s = new Student("deep");
console.log(s)


// Question 2 : What is the prototype chain
// Question 3 : what is the difference between call, apply and bind
// Question 4 : JSON methods

// 1. JSON.parse()
// - it converts an stringify version of the object to normal object.
let jsonString = '{"name": "John", "age": 30, "city": "New York"}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject)

// 2. JSON.stringify()
// it converts normal json data to json string data.
let json = {
    "name": "John",
    "age": 30,
    "city": "New York"
};
console.log(typeof json, json)
const stringJson = JSON.stringify(json);
console.log(typeof stringJson, stringJson)

// IFFE - Immediately Invoked Function Expression
const vari = (function () {
    var message = "IIFE";
    console.log(message);
})();
// console.log(message); //Error: message is not defined

// Decode and Encode URL
let uri = "employeeDetails?name=john deo&occupation=marketing manager";
let encoded_uri = encodeURI(uri);
console.log(encoded_uri)
let decoded_uri = decodeURI(encoded_uri);
console.log(decoded_uri)