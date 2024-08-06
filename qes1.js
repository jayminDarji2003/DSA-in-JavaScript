// below syntax is iffi : iffi is basically run immediately
(function () {
    console.log("hello world!");
})()

console.log(Math.random());  // random function will give you random numbers between 0 to 1.

console.log(Math.round(111.911));  // round will give you the round figure number

console.log(Math.floor(111.911));  // floor will give you only digit.


const obj = {
    name: "jaymin",
    age: 21,
    isStudent: "yes",
    course: "mca",
    gender: "male",
}

console.log(Object.keys(obj));  // return whole keys
console.log(Object.keys(obj).length);  // length
