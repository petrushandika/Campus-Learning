class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(value) {
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

const people = new Person("Petrus", "Handika")
console.log(people);
console.log(people.fullName);

people.fullName = "Bujang Lapuk";
console.log(people);
console.log(people.fullName);