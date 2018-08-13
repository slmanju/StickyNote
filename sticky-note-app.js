'use strict';

import StickyNote from './sticky-note.js';

class StickyNoteApp {
    constructor() {
        this.notesContainer = document.getElementById('notes');
        this.noteInput = document.getElementById('note');
        this.titleInput = document.getElementById('title');
        this.saveButton = document.getElementById('saveButton');

        this.$savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

        this.saveButton.addEventListener('click', () => this.saveNote());

        this.$savedNotes.forEach(note => this.displayNote(note));
    }

    displayNote(note) {
        let noteElement = document.createElement('sticky-note');
        noteElement.setNote(note);
        this.notesContainer.appendChild(noteElement);
    }

    saveNote() {
        if (this.noteInput.value) {
            let key = Date.now().toString();
            let note = { id: key, title: this.titleInput.value, note: this.noteInput.value };

            this.displayNote(note);

            this.$savedNotes.push(note);
            localStorage.setItem("notes", JSON.stringify(this.$savedNotes));

            this.noteInput.value = '';
            this.titleInput.value = '';
        }
    }

}

export default StickyNoteApp;