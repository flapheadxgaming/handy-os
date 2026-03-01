// ui/AppLauncher.js

class AppLauncher {
    constructor(apps) {
        this.apps = apps;
    }

    render() {
        const launcher = document.createElement('div');
        launcher.className = 'app-launcher';

        this.apps.forEach(app => {
            const appButton = document.createElement('button');
            appButton.innerText = app.name;
            appButton.onclick = () => this.launchApp(app);
            launcher.appendChild(appButton);
        });

        document.body.appendChild(launcher);
    }

    launchApp(app) {
        console.log(`Launching ${app.name}...`);
        // Logic to launch the app
    }
}

// Example usage
const apps = [
    { name: 'App 1' },
    { name: 'App 2' },
    { name: 'App 3' },
];

const appLauncher = new AppLauncher(apps);
appLauncher.render();