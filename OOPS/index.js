console.log("oops in js")

// objects 
const Employee = {
    calTax() {
        console.log("tax is 10%")
    }
}

const jaymin = {
    fullName: "Jaymin Darji",
    age: 21,
    marks: 98,
    getMarks: function () {
        console.log("MARKS = ", this.marks)
    }
}

jaymin.__proto__ = Employee


// classes and objects
class ToyotaCar {
    constructor(name, mileage) {
        this.name = name;
        this.mileage = mileage;
        console.log("creating new object = ", name, mileage)
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop")
    }
}

const fortuner = new ToyotaCar("fortuner top", 10);
const lexus = new ToyotaCar("lexus low", 16);