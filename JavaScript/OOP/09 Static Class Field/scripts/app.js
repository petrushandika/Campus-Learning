// Static Class Field
class Configuration {
    static name = "Learning OOP JavaScript";
    static version = 1.0;
    static author = "Petrus Handika";
}

console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);

// Static Method
class MathUtil {
    static sum(...numbers) {
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.log(result);