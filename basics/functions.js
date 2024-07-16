// FUNCTIONS IN JAVASCRIPT

// TOPICS IN FUNCTION
/*
    1. function definition
    2. calling function
    3. function parameters
    4. function arguments
    5. function expressions
    6. return keyword
    7. anonymous function
*/

// TYPES OF FUNCTIONS
/*
    1. NORMAL FUNCTION
    2. ARROW FUNCTION
    3. ANONYMOUS FUNCTION
*/


console.log("-----------------  FUNCTIONS ----------------")

// Normal function
function max(a, b) {
    if (a > b) {
        return "a is max";
    } else {
        return "b is max";
    }
}

const res = max(10, 2);
console.log(res)

// Arrow function
const square = (x) => {
    return x * x;
}
console.log(square(10));

// anonymous function
const cube = function (x) {
    return x * x * x;
}
console.log(cube(10));
