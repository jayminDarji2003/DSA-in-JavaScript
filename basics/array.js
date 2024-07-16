// ARRAY IN JAVASCRIPT

const arr = ["a", "b", "c", "d", "e"]
console.log(typeof arr, arr)

// convert arrays to strings
const str = arr.toString();
console.log(typeof str, str)

// join method
const newarr = arr.join("--");
console.log(newarr, typeof newarr)

const arr2 = ["a", "b", "c", "d", "e"]
// pop - remove element from last
arr2.pop()
console.log(arr2)

// push - add element to last
arr2.push("jaymin")
console.log(arr2)

//shift - remove the first element
arr2.shift()
console.log(arr2)

// unshift - add element to first
arr2.unshift("jaymin")
console.log(arr2)

// delete - array element deleted using delete operator
const x = [1, 2, 3, 4, 5];
delete x[1];
console.log(x)

// concat array
const y = ["deep", "jeel", "dev"];
const xx = [1, 2, 3, 4, 5];
const array = xx.concat(y);
console.log(array)

// sort
/*
    arr.sort();    -> sort array alphabetically
    arr.sort(ascFnx);  -> sort array ascending order   -> ascFnx -> return a-b
    arr.sort(desFnx);  -> sort array descending order  -> -> desFnx -> return b-a
*/

const myArray = [1, 11, 554, 7, 23, 67, 4, 121, 567, 32, 7897];

// sort alphabatically
const s1 = myArray.sort()
console.log(s1)

// sort ascending order
function compare(a, b) {
    return a - b;
}
const s2 = myArray.sort(compare)
console.log(s2)

// sort descending order
function compare2(a, b) {
    return b - a;
}
const s3 = myArray.sort(compare2)
console.log(s3)


// reverse an array
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a.reverse())

// splice
// used to add new element to an array
const b = [10, 12, 14, 16, 18, 20];
b.splice(3, 2, 111, 222);  //(where to start removing element, how many elements you want to remove, add new ele)
console.log(b)


// slice 
const c = [10, 12, 14, 16, 18, 20];
const newc = c.slice(3, 5);
console.log(newc)