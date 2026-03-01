class InputHandler {
    constructor() {
        this.mousePosition = { x: 0, y: 0 };
        this.touchPositions = {};
        this.swipeStart = null;
        this.swipeEnd = null;
        this.keyStates = {};
    }

    init() {
        this.setupMouseListeners();
        this.setupTouchListeners();
        this.setupKeyboardListeners();
    }

    setupMouseListeners() {
        window.addEventListener('mousemove', (event) => {
            this.mousePosition.x = event.clientX;
            this.mousePosition.y = event.clientY;
        });
    }

    setupTouchListeners() {
        window.addEventListener('touchstart', (event) => {
            for (let touch of event.touches) {
                this.touchPositions[touch.identifier] = { x: touch.clientX, y: touch.clientY };
            }
            this.swipeStart = event.touches[0];
        });

        window.addEventListener('touchend', (event) => {
            this.swipeEnd = event.changedTouches[0];
            this.handleSwipe();
            for (let identifier of Object.keys(this.touchPositions)) {
                delete this.touchPositions[identifier];
            }
        });
    }

    setupKeyboardListeners() {
        window.addEventListener('keydown', (event) => {
            this.keyStates[event.key] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keyStates[event.key] = false;
        });
    }

    handleSwipe() {
        const swipeDirection = this.getSwipeDirection();
        console.log('Swipe detected:', swipeDirection);
    }

    getSwipeDirection() {
        if (!this.swipeStart || !this.swipeEnd) return null;
        const dx = this.swipeEnd.clientX - this.swipeStart.clientX;
        const dy = this.swipeEnd.clientY - this.swipeStart.clientY;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        if (absDx > absDy) {
            return dx > 0 ? 'right' : 'left';
        } else {
            return dy > 0 ? 'down' : 'up';
        }
    }
}

export default new InputHandler();