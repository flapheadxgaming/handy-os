// ThemeEngine.js

class ThemeEngine {
    constructor() {
        this.themes = {
            light: {
                backgroundColor: '#ffffff',
                color: '#000000'
            },
            dark: {
                backgroundColor: '#000000',
                color: '#ffffff'
            },
            cyberpunk: {
                backgroundColor: '#0f0f0f',
                color: '#39ff14',
                accentColor: '#ff007f'
            }
        };
        this.currentTheme = 'light'; // default theme
    }

    setTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            this.applyTheme();
        } else {
            console.warn(`Theme ${themeName} does not exist.`);
        }
    }

    applyTheme() {
        const theme = this.themes[this.currentTheme];
        document.body.style.backgroundColor = theme.backgroundColor;
        document.body.style.color = theme.color;
        if (this.currentTheme === 'cyberpunk') {
            document.body.style.textShadow = '0 0 5px ' + theme.accentColor;
        }
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

// Exporting the ThemeEngine class
export default ThemeEngine;