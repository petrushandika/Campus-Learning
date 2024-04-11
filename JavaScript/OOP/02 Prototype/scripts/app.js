// Prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.info = function(name) {
        console.log(`Hello ${name}, my name is ${firstName} ${lastName}`);
    }
}

Person.prototype.sayBye = function() {
    console.log(`Good bye ${name}`);
}

Person.prototype.run = function() {
    console.log(`${this.firstName} is running`);
}

const one = new Person("Petrus", "Handika");
const two = new Person("Jamal", "Udin");

console.log(one);
console.log(two);

// Inheritance Prototype
function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function(name) {
    console.log(`Hello ${name}, Your name Manager is ${this.name}`);
}

Employee.prototype.sayHello = function(name) {
    console.log(`Hello ${name}, Your name Employee is ${this.name}`);
}

const manager = new Manager("Saipul");
const employee = new Employee("Udin");

console.log(manager);
console.log(employee);