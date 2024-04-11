// Private Class Field
class Counter {
    #counter = 0;

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter);

// Private Method
class Person {
    say(name) {
        if(name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.log(`Hello`);
    }

    #sayWithName(name) {
        console.log(`Hello ${name}`);
    }
}

const people = new Person();
console.log(people);
people.say("Petrus");