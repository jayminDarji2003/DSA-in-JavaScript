// Inheritance in javascript

console.log("==========================================")

// ex 1
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent { }

// let c = new Child();



// ex 2
class Person {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing")
    }
}


class Engineer extends Person {
    constructor(branch) {
        super();
        this.branch = branch;
    }

    work() {
        console.log("solve problems, build something")
    }
}

class Doctor extends Person {
    work() {
        console.log("provide treatment, counsel patients")
    }
}

let bhargav = new Engineer("chemical");
let nirvi = new Doctor();