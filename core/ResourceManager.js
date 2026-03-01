// ResourceManager.js
// Module for memory and performance management

class ResourceManager {
    constructor() {
        this.resources = {};
    }

    allocateResource(name, size) {
        this.resources[name] = { size, usage: 0 };
        console.log(`Allocated resource: ${name} of size: ${size}`);
    }

    deallocateResource(name) {
        if (this.resources[name]) {
            delete this.resources[name];
            console.log(`Deallocated resource: ${name}`);
        } else {
            console.log(`Resource: ${name} not found`);
        }
    }

    useResource(name, amount) {
        if (this.resources[name]) {
            this.resources[name].usage += amount;
            console.log(`Used resource: ${name}, amount: ${amount}`);
        } else {
            console.log(`Resource: ${name} not found`);
        }
    }

    getResourceStatus(name) {
        return this.resources[name] || null;
    }

    report() {
        console.log("Resource Report:");
        for (const [name, resource] of Object.entries(this.resources)) {
            console.log(`- ${name}: Size=${resource.size}, Usage=${resource.usage}`);
        }
    }
}

module.exports = ResourceManager;
