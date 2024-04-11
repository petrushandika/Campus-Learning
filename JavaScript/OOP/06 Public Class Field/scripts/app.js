class Customer {
    // Public Class Field
    firstName;
    lastName;
    balance = 0;

    // Access Public Class To Costructor
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const people = new Customer("Petrus", "Handika");
console.log(people);