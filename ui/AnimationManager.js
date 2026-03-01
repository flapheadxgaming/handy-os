// AnimationManager.js
// Centralized control for animations

class AnimationManager {
    constructor() {
        this.animations = {};
    }

    addAnimation(name, animation) {
        this.animations[name] = animation;
    }

    playAnimation(name) {
        if (this.animations[name]) {
            this.animations[name].play();
        } else {
            console.warn(`Animation '${name}' not found.`);
        }
    }

    stopAnimation(name) {
        if (this.animations[name]) {
            this.animations[name].stop();
        } else {
            console.warn(`Animation '${name}' not found.`);
        }
    }
}

// Export the AnimationManager class
module.exports = AnimationManager;