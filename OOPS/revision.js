// OOPs in any language

/*
    4 Pillars of oops
        1. Encapsulation
            - Wrapping properties and methods into a single class
        2. Inheritance  
            - share properties and method to it's children
            - types :-
                1. Single inheritance
                2. Multiple inheritance
                3. Multilavel inheritance
                4. Hybrid inheritance
                5. Hairarchical inheritance
        3. Polymorphism
            - One form havig multiple forms
            - types :
                1. Method Overloading
                2. Method Overriding
        4. Abstraction
            - Show only a required information to the user


    -> Constructor
        - constructor is a special method that will automatically called when the object is created.
        - types :
            1. non-parameterized constructor
            2. parameterized constructor
    
    -> static keyword
        -> static is a keyword that is used when we want to keep same properties value to all the objects.

    -> super method
        -> when we want to access parent constructor,properties,methods then super() used. 
    

*/

class College {
    constructor() {
        console.log("non parameterized constructor")
    }

    sum(a, b) {
        return a + b;
    }

    // sum(a, b, c) {
    //     return a + b + c;
    // }
}

let c1 = new College();
console.log(c1.sum(10, 20), "sm") 