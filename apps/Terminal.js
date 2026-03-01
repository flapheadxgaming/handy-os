// Terminal.js
// Command-line interface with hackable commands

class Terminal {
    constructor() {
        this.commands = {};
    }

    registerCommand(name, fn) {
        this.commands[name] = fn;
    }

    executeCommand(commandString) {
        const [command, ...args] = commandString.split(' ');
        if (this.commands[command]) {
            return this.commands[command](...args);
        } else {
            return `Command not found: ${command}`;
        }
    }
}

// Example Usage
const terminal = new Terminal();

the
// Registering a hackable command
terminal.registerCommand('greet', (name) => `Hello, ${name}!`);

// Executing the command
console.log(terminal.executeCommand('greet World')); // Output: Hello, World!