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