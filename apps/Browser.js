// Browser.js

class Browser {
    constructor() {
        this.bookmarks = {};
    }

    addBookmark(name, url) {
        this.bookmarks[name] = url;
    }

    removeBookmark(name) {
        delete this.bookmarks[name];
    }

    listBookmarks() {
        return this.bookmarks;
    }

    openUrl(url) {
        console.log(`Opening ${url}`);
    }
}

// Example Usage
const myBrowser = new Browser();
myBrowser.addBookmark('OpenAI', 'https://www.openai.com');
myBrowser.addBookmark('GitHub', 'https://www.github.com');
console.log(myBrowser.listBookmarks());
myBrowser.openUrl('https://www.openai.com');
