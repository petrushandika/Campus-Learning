// Class Error
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

// Static Method
class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new ValidationError("Total paramater must more than 0")
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

try {
    console.log(MathUtil.sum());
    console.log("Bujang Lapuk");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Error on field ${error.field}, ${error.message}`);
    }
} finally {
    console.log("Finish");
}

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.log(result);

// Try Finally
class Counter {
    #counter = 1;

    next() {
        try {
            return this.#counter;
        } finally {
            this.#counter++;
        }
    }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());