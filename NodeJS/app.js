// show output on terminal
console.log("Hello World");

// Standard library require function
const os = require("os");

console.log(os.platform());
console.table(os.cpus());

// Global async
function samplePromise() {
  return Promise.resolve("Petrus");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();

/* Debugger
Debug mode command
watch(parameter): view value from parameter
cont, c: Continue execution
next, n: Step Next
step, s: Step in
out, o: Step out
pause: Pause running code
.exit: Exit command */
function sayHello(name) {
  debugger;
  return `Hello ${name}`;
}

const name = "Petrus";
console.log(sayHello(name));
