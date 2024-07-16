// Declare variables
// var, let, const
// var -> used to create global scope variables, used in old version of js
// let -> used to create local scope variables
// const -> used to create constant variables
var name = "jaymin";
let name2 = "deep";
const name3 = "jeel";
console.log(name, typeof (name), name2, name3)
name = 3;
console.log(name, typeof (name))
name2 = 3;
console.log(name2, typeof (name2))
// name3 = 3;  // give error because we are trying to assign value to constant variable.
console.log(name3, typeof (name3))


console.log("----------------------------------------------------------------")


// Datatpes in javascript
// nn bb ss u :- short hand to remember datatypes

// number
// null
// undefined
// string
// boolean
// bigint
// symbol
// object

// undefined
let val1;
console.log(typeof (val1))

// string
let val2 = "jaymin darji";
console.log(val2, typeof val2)

// number
let val3 = 6767;
console.log(val3, typeof val3)

// boolean
let val4 = true;
console.log(val4, typeof val4)

// symbol
let val5 = Symbol("i am symbol");
console.log(val5, typeof val5)

// big int
let val6 = BigInt("676767676761111111");
console.log(val6, typeof val6)

// null
let val7 = null;
console.log(val7, typeof val7)

// object
const obj = {
    name: "jaymin",
    age: 21,
    gender: "male",
    student: "mca",
    profession: "software engineer"
}

console.log(obj, typeof obj)
console.log(obj["name"])
console.log(obj["age"])
console.log(obj["gender"])
console.log(obj["student"])
console.log(obj["profession"])


console.log("----------------------------------------------------------------")

// Operators in js
/*
    1. assignment operator  --> =, +=, -= , *=, /=,
    2. arithmetic operator  --> + , - , * , / , %
    3. comparision operator --> < , > , <= , >=, === , ==, !==
    4. logical operator     --> &&, ||, 1
    5. conditional operator -> ? :
*/


// control statements
/*
    1. if else
    2. switch statements
    3. while loop
    4. do while loop
    5. for loop
    6. for in loop
    7. for of loop
    8. foreach loop
    9. conditional operator
*/

let a = 10;
let b = 10;

// if else
if (a > b) {
    console.log(b, " b is max");
} else if (a === b) {
    console.log("both are same")
}
else {
    console.log(a, " a is max")
}


// switch statements
const ch = 4;

switch (ch) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;

    default:
        console.log("invalid choice")
        break;
}


// while loop
let x = 1;

while (x < 10) {
    console.log(x)
    x++;
}

console.log("--------------------")

// do while loop
let y = 1;
do {
    console.log(y);
    y++;
} while (y < 10)

console.log("--------------------")

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log("--------------------")

const myArr = ["apple", "banana", "mango", "orange", "watermelon", "muskmelon"];

// for in loop - return index of it.
for (let fruit in myArr) {
    console.log(fruit)
}
console.log("--------------------")

// for of loop - return value of it.
for (let fruit of myArr) {
    console.log(fruit)
}


const myArr2 = [["apple", "banana", "mango"], ["orange", "watermelon", "muskmelon"]];
for (let i of myArr2) {
    console.log(i)
}

console.log("--------------------")

// conditional operator
// ? :

let j = 100;
let d = 120;
console.log(j > d ? "j is max" : "d is max");

console.log("--------------------")

