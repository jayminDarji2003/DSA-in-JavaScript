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
    // document.body.style.backgroundColor = newColor;
    ele.style.color = "white";
    ele.style.padding = "10px";
    ele.style.fontWeight = "bold";
    ele.style.backgroundColor = newColor;
}

const l1 = document.getElementsByTagName("li")[0];
l1.style.cursor = "pointer";
l1.addEventListener("click", () => {
    alert(l1.innerText)
})
const l2 = document.getElementsByTagName("li")[1];
l2.style.cursor = "pointer";
l2.addEventListener("click", () => {
    alert(l2.innerText)
})
const l3 = document.getElementsByTagName("li")[2];
l3.style.cursor = "pointer";
l3.addEventListener("click", () => {
    alert(l3.innerText)
})


const mydiv = document.querySelector("#mydiv");
mydiv.style.border = "1px solid black ";
const button = document.createElement("button");
button.innerText = "click me";
// mydiv.appendChild(button)
button.addEventListener("click", () => {
    alert("btn clicked")
})

mydiv.insertAdjacentElement("beforeend", button)