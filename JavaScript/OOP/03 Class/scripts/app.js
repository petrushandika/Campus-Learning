// Class
class Person {
    // Instance Object
    constructor(name) {
        this.name =  name;
    }
    // Method
    sayHello(name) {
        console.log(`Hello ${name}, Your username is ${this.name}`);
    }
}

const people = new Person("Petrus");
people.sayHello("Ujang");
console.log(people);

// Inheritance Class
class Employee {
    // Method
    sayHello(name) {
        console.log(`Hello ${name}, Your name Employee is ${this.name}`);
    }
}

class Manager extends Employee {
    // Method
    sayHello(name) {
        console.log(`Hello ${name}, Your name Manager is ${this.name}`);
    }
}

const one = new Employee();
one.sayHello("Jamal");
console.log(one);

const two = new Manager();
two.sayHello("Udin");
console.log(two);