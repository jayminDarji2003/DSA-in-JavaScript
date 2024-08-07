// REVISION IN JAVASCRIPT

// CONVERT STRING TO NUMBER
var name = 909;
console.log(typeof +name)

// convert string to number
let myCourse = 9001;
console.log(typeof (myCourse + ""))

// string
const str = "i'm verygood programmer               ";
console.log(str.trim());   // trim white spaces
console.log(str.indexOf("i"));  // fetch index 

console.log(typeof true)




const arr = ["course", "name", "papad"];
for (let i of arr) {
    console.log(i)
}

let a, b, rest;
[a, ...rest] = arr;
console.log(a, rest)


// destructuring object
let objh = {
    namee: "jaymin",
    age: 21,
    gender: "male"
}


let { namee, age, gender } = objh;
console.log(namee, age, gender)