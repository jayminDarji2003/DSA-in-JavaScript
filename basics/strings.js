// STRINGS IN JAVASCRIPT

//* Notes
/*
    1. you can use single quote or double quote to create string.
*/

const name = "codewithjaymin";
console.log(name)

// show first character
console.log(name.charAt(0))
// or
console.log(name[0])

// find the length of the string
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase())

// convert to lowercase
console.log(name.toLowerCase())

// create slice
const res = name.slice(0, 4);  // remember 4 is not inclusive
console.log(res)

// replace characters
const x = "jaymin darji";
const y = x.replace("jaymin", "deep");
console.log(y)

// concate
const a = "jay";
const b = "darji";
const newStr = a + b;
// or
const newstr = a.concat(b);
console.log(newStr)
console.log(newstr)

// split
const friend = "bhargav deep jeel dev harshal";
const newFriend = friend.split(" ");
console.log(newFriend, typeof newFriend)

// trim
let frd = "     jeel     ";
console.log(frd.trim())  // this will remove the empty spaces

// convert to string
const num = 12345;
console.log(typeof num)
const newNum = num.toString();
console.log(newNum, typeof newNum)
