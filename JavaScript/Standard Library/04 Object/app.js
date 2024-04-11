// Object freeze and seal
const person = {
    firstName: "Petrus",
    lastName: "Handika"
}

// Object freeze cant change value and delete property
Object.freeze(person);
// Object seal can change value but cant delete property
Object.seal(person);
person.firstName = "Ujang";
person.middleName = "Ridho";
delete person.lastName;
console.log(person);

// Object assign
const target = {
    firstName: "Jamal"
}

const source = {
    lastName: "Udin"
}

Object.assign(target, source)
console.log(target);
console.log(source);

// Object property name and value
const people = {
    firstName: "Didin",
    lastName: "Pangestu"
}

console.log(Object.values(people));
console.log(Object.getOwnPropertyNames(people));