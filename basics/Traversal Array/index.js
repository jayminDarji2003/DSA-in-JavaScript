console.log("Traverse an array")

const arr = ["laptop", "mobile", "keyboard", "mouse", "pen", "notebook"];

// forEach
arr.forEach((ele) => {
    console.log(ele);
})

console.log("--------------------------------")

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("--------------------------------")

// map
arr.map((ele) => {
    console.log(ele);
})

console.log("--------------------------------")

/// for of loop
for (let ele of arr) {
    console.log(ele);
}

console.log("--------------------------------")


// for in loop
// NOTE : for in loop mostly used in object
const obj = {
    first: "jaymin",
    second: "deep",
    third: "jeel"
}

for (let ele in obj) {
    console.log(obj[ele]);
}

// console.log(obj.first)

console.log("--------------------------------")

// filter method
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = a.filter((ele) => {
    return ele >= 7;
})
console.log(n)

// reduce method
const re = a.reduce((accumulator, current) => {
    return accumulator + current;   
}, 10)

console.log(re)