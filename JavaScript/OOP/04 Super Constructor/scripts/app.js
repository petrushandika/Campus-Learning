// Super Constructor
class Employee {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, Your Employee name is ${this.firstName}`);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, Your Manager name is ${this.firstName} ${this.lastName}`);
    }
}

const one = new Employee("Bujang");
one.sayHello("Baby");
console.log(one);

const two = new Manager("Laek", "Bujang");
two.sayHello("Lapuk");
console.log(two);

// Super Method
class Shape {
    paint() {
        console.log("Paint Shape");
    }
}

class Circle extends Shape {
    paint() {
        super.paint();
        console.log("Paint Circle");
    }
}

const circle = new Circle();
circle.paint();

