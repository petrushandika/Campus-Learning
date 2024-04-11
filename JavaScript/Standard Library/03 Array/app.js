// Array Loop
const array = ["Petrus", "Handika", "Sinaga"];
array.forEach(function(value, index) {
    console.log(`${index} : ${value}`);
})

array.forEach((value, index) => console.log(`${index}: ${value}`));

array.forEach(value => console.log(value))

// Array Queue
const queue = [];
queue.push("Petrus");
queue.push("Handika");
queue.push("Sinaga");

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

// Array Stack
const stack = [];
stack.push("Petrus");
stack.push("Handika");
stack.push("Sinaga");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// Array Search
const search = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(search.find(value => value > 3));
console.log(search.findIndex(value => value >3));
console.log(search.includes(7));
console.log(search.indexOf(5));
console.log(search.lastIndexOf(5));

// Array filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = numbers.filter(value => value % 2 === 1);
const even = numbers.filter(value => value % 2 === 0);

console.log(numbers);
console.log(odd);
console.log(even);

// Array transform
const user = ["Petrus", "Handika", "Sinaga"];
const userMap = user.map(value => value.toUpperCase());
console.log(userMap);

const userReduce = user.reduce((before, value) => before + " " + value);
console.log(userReduce);

const userRight = user.reduceRight((before, value) => before + " " + value);
console.log(userRight);