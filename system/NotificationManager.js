class NotificationManager {
    constructor() {
        this.notifications = [];
    }

    // Show a toast notification
    showToast(message, duration = 3000) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, duration);
    }

    // Show a banner notification
    showBanner(message) {
        const banner = document.createElement('div');
        banner.className = 'banner';
        banner.innerText = message;
        document.body.appendChild(banner);

        setTimeout(() => {
            banner.remove();
        }, 5000);
    }

    // Add notification to the notification center
    addNotification(notification) {
        this.notifications.push(notification);
        this.updateNotificationCenter();
    }

    // Update notification center display
    updateNotificationCenter() {
        const notificationCenter = document.getElementById('notification-center');
        notificationCenter.innerHTML = '';
        this.notifications.forEach((note) => {
            const noteElement = document.createElement('div');
            noteElement.className = 'notification';
            noteElement.innerText = note;
            notificationCenter.appendChild(noteElement);
        });
    }
}

// Usage:
const notificationManager = new NotificationManager();

// To show toast:
// notificationManager.showToast('This is a toast notification!');

// To show banner:
// notificationManager.showBanner('This is a banner notification!');

// To add notification to center:
// notificationManager.addNotification('New message received!');
