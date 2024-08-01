console.log("hello world!");

// alert , confirm, prompt
/*
setTimeout(() => {
    alert("Data is loading please wait?");
}, 3000);

setTimeout(() => {
    const a = confirm("Are you sure you want to continue?");
    console.log(a);

    if (a) {
        const res = prompt("What's your name?");
        const name = document.getElementById("name").innerHTML = res;
    }


}, 5000);
*/


// started DOM Manipulation

// get element by Id
const name = document.getElementById("name");
name.innerText = "jaymin darji";

const age = document.getElementsByClassName("myAge")[0];
console.log(age)
age.innerText = "age 21";

function changeBg(newColor) {
    const ele = document.getElementsByTagName("span")[0];
    ele.innerText = ele.innerHTML.toUpperCase();
    ele.style.color = "white";
    ele.style.padding = "10px";
    ele.style.fontWeight = "bold";
    ele.style.backgroundColor = newColor;
}


