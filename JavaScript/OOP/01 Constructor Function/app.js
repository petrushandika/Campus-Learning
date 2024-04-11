// Constructor Function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Method
    this.info = function(name) {
        console.log(`Hello ${name}, Your name is ${this.firstName} ${this.lastName}`);
    }
}

const people = new Person("Petrus", "Handika");
people.info("Ujang");

// Constructor Inheritance
function Employee(firstName) {
    this.firstName = firstName;
    // Method
    this.info = function(name) {
        console.log(`Hello ${name}, Your name is ${this.firstName}`);
    }
}  

function Manager(firstName, lastName) {
    Employee.call(this, firstName);
    this.lastName = lastName;
}

const user = new Manager("Petrus", "Handika");
console.log(user);