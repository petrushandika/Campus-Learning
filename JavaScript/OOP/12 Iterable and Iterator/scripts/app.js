// Counter Iterator Result
class CounterIteratorResult {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }
}

// Counter Iterator
class CounterIterator {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }
    // Contract Iterator
    next() {
        try {
            if (this.value > this.max) {
                return new CounterIteratorResult(this.value, true);
            } else {
                return new CounterIteratorResult(this.value, false);
            }
        } catch (error) {
            this.value++;
        }
    }
}

// Counter Iterable
class Counter {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    [Symbol.iterator]() {
        return new CounterIterator(this.value, this.max);
    }
}

// Using Counter Iterable with for of
const counter = new Counter(1, 10);
for (const value of counter) {
    console.log(value);
}