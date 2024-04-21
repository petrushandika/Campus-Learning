// Standard library modules
import os from "os";

console.info(os.platform());
console.table(os.cpus());

// Global async
function samplePromise() {
  return Promise.resolve("Petrus");
}

const name = await samplePromise();
console.log(name);

// Operation Systems
import operationSystems from "os";

console.log(operationSystems.platform());
console.log(operationSystems.arch());
console.log(operationSystems.freemem());
console.log(operationSystems.totalmem());
console.log(operationSystems.homedir());
console.log(operationSystems.hostname());
console.log(operationSystems.cpus());
console.log(operationSystems.networkInterfaces());

// Path
import path from "path";

const file = "/Users/petru/test.txt";

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));

// File systems
import fs from "fs/promises";

const buffer = await fs.readFile("app.mjs");

console.log(buffer.toString());

await fs.writeFile("temp.txt", "Hello NodeJS");

// DNS (Domain Name Server)
import dns from "dns/promises";

const addrress = await dns.lookup("www.programmerzamannow.com");

console.log(addrress.address);
console.log(addrress.family);

// Events
import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => {
  console.log(`Hello ${name}`);
});

emitter.addListener("hello", (name) => {
  console.log(`Halo ${name}`);
});

emitter.emit("hello", "Petrus");

// Globals
setTimeout(() => {
  console.log("Hello Globals");
}, 2000);
