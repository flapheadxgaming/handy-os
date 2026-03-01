'use strict';

class Dock {
    constructor() {
        this.pinnedApps = [];
        this.createDock();
    }

    createDock() {
        // Logic to create the dock UI
    }

    pinApp(app) {
        if (!this.pinnedApps.includes(app)) {
            this.pinnedApps.push(app);
            this.updateDock();
        }
    }

    updateDock() {
        // Logic to update the dock UI with pinned apps
    }
}

export default Dock;
