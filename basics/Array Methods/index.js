console.log("Today we will deep dive into Arrays.");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = ["apple", "orange", "banana"];
console.log(arr, typeof arr)  // object

// converting arrays to strings
const str = arr.toString();
console.log(str, typeof str) // string

// join
const joinedArray = arr.join("-");
console.log(joinedArray, typeof joinedArray)

// pop
// removing the last element from the array
arr.pop();
console.log(arr);

// push
// add new element to the array
arr.push("watermelon");
console.log(arr)

// shift
// remove first element from the array
arr.shift();
console.log(arr);

// unshift
// add new element to first position to the array
arr.unshift("apple");
console.log(arr);

// delete operator
delete arr[2];
console.log(arr);

// splice method
// remove element using index
arr.splice(1, 0, "jaymin");
console.log(arr);

arr[1] = "jaymindarji";
console.log(arr);

// console.log(arr[3])

arr.splice(3, 1);

// concat
const newArr = arr.concat(["banana", "muskmelon", "strowberry", "cherry"]);
console.log(newArr)

// sort
newArr.sort();
console.log(newArr);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.sort((a, b) => a - b);  // sort in ascending order
console.log(array)
array.sort((a, b) => b - a);  // sort in descending order
console.log(array)

// reverse
array.reverse();
console.log(array)

// slice
const slice = array.slice(2, 5);  // 3,4,5
console.log(slice)



