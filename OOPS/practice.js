// Q1 : You are creating a website for our college. Create a class User with two Properties : name and email. It has a method viewData() that allows User to view website data.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(this.name)
        console.log(this.email)
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData(name, email) {
        this.name = name;
        this.email = email;
    }
}

const u1 = new User("jaymin", "jaymin@gmail.com");
// u1.viewData();
const admin = new Admin("admin", "admin@gmail.com");
