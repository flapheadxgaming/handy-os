// QuickNotes Widget
class QuickNotes {
    constructor() {
        this.notes = [];
        this.loadNotes();
    }

    loadNotes() {
        const savedNotes = localStorage.getItem('quickNotes');
        if (savedNotes) {
            this.notes = JSON.parse(savedNotes);
        }
    }

    saveNotes() {
        localStorage.setItem('quickNotes', JSON.stringify(this.notes));
    }

    addNote(note) {
        this.notes.push(note);
        this.saveNotes();
    }

    getNotes() {
        return this.notes;
    }

    clearNotes() {
        this.notes = [];
        this.saveNotes();
    }
}

// Example usage
const quickNotes = new QuickNotes();
quickNotes.addNote('This is a quick note!');
console.log(quickNotes.getNotes());
