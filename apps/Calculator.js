// Full-featured Calculator with Memory Functions

class Calculator {
    constructor() {
        this.memory = 0;
        this.currentValue = 0;
    }

    add(value) {
        this.currentValue += value;
        return this.currentValue;
    }

    subtract(value) {
        this.currentValue -= value;
        return this.currentValue;
    }

    multiply(value) {
        this.currentValue *= value;
        return this.currentValue;
    }

    divide(value) {
        if (value === 0) {
            throw new Error('Cannot divide by zero');
        }
        this.currentValue /= value;
        return this.currentValue;
    }

    clear() {
        this.currentValue = 0;
        return this.currentValue;
    }

    memorize() {
        this.memory = this.currentValue;
    }

    recall() {
        this.currentValue = this.memory;
        return this.currentValue;
    }

    clearMemory() {
        this.memory = 0;
    }
}

// Example Usage:
const calc = new Calculator();
calc.add(5);      // 5
calc.multiply(2); // 10
calc.memorize();  // Memory stored as 10
calc.clear();     // Clear current value
calc.recall();    // Recall memory value, returns 10
