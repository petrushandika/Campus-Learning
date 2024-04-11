// Number
input = "12345"
console.log(input);
console.log(typeof input);

const number = Number(input);
console.log(number);
console.log(typeof number);

console.log(Number("Wrong"));

// Number Static
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);

// Number Static Method
const data = Number("Jamal");
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

// Number Static Instance Method
const value = Number("12345");
console.log(value.toString(2));
console.log(value.toLocaleString("id-ID"));
console.log(value.toLocaleString("en-US"));