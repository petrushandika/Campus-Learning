// instanceof Operator
class Employee {

}

class Manager extends Employee {

}

const one = new Employees();
const two = new Manager();

console.log(typeof one);
console.log(typeof two);

console.log(one instanceof Employee); // True
console.log(one instanceof Manager); // False

console.log(two instanceof Employee); // True
console.log(two instanceof Manager); // True