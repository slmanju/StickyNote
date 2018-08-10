'use strict';

import StickyNote from './sticky-note.js';

class StickyNoteApp {
    constructor() {
        console.log('hello from app');
        this.$notes = [
            { id: 1, title: 'title a', note: 'note a' },
            { id: 2, title: 'title b', note: 'note b' },
            { id: 3, title: 'title c', note: 'note c' },
            { id: 4, title: 'title d', note: 'note d' }
        ];
        this.$notesContainer = document.getElementById("notes");
        let container = this.$notesContainer;
        this.$notes.forEach((note) => {
            let noteElement = document.createElement('sticky-note');
            noteElement.setNote(note);
            container.appendChild(noteElement);
        });
    }
}

export default StickyNoteApp;