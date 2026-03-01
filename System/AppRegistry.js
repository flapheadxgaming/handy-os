// System/AppRegistry.js

class AppRegistry {
  constructor() {
    this.apps = {};
  }

  registerApp(appName, appInstance) {
    if (this.apps[appName]) {
      throw new Error(`App ${appName} is already registered.`);
    }
    this.apps[appName] = appInstance;
    console.log(`Registered app: ${appName}`);
  }

  unregisterApp(appName) {
    if (!this.apps[appName]) {
      throw new Error(`App ${appName} is not registered.`);
    }
    delete this.apps[appName];
    console.log(`Unregistered app: ${appName}`);
  }

  getApp(appName) {
    return this.apps[appName];
  }

  listApps() {
    return Object.keys(this.apps);
  }

  startApp(appName) {
    const app = this.getApp(appName);
    if (app && typeof app.start === 'function') {
      app.start();
      console.log(`Started app: ${appName}`);
    } else {
      console.log(`Could not start app: ${appName}. It may not be registered or does not have a start method.`);
    }
  }

  stopApp(appName) {
    const app = this.getApp(appName);
    if (app && typeof app.stop === 'function') {
      app.stop();
      console.log(`Stopped app: ${appName}`);
    } else {
      console.log(`Could not stop app: ${appName}. It may not be registered or does not have a stop method.`);
    }
  }
}

export default new AppRegistry();