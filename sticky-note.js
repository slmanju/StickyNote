'use strict';

class StickyNote extends HTMLElement {

    constructor() {
        super();
    }

    // Fires when an instance of the element is created.
    createdCallback() {
        this.innerHTML = StickyNote.TEMPLATE;
        this.$note = '';
        this.$noteElement = this.querySelector('#note');
        this.$titleElement = this.querySelector('#title');
        this.$deleteElement = this.querySelector('#delete');
        this.$deleteElement.addEventListener('click', () => this.deleteNote());
    };

    deleteNote() {
        this.parentNode.removeChild(this);
        var event = new CustomEvent('noteDelete', { detail: this.$note });
        this.dispatchEvent(event);
    }

    // Fires when an instance was inserted into the document.
    attachedCallback() {};

    // Fires when an instance was removed from the document.
    detachedCallback() {};

    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {};

    setNote(note) {
        this.$noteElement.textContent = note.note;
        this.$titleElement.textContent = note.title;
        this.$note = note;
    }

}

StickyNote.TEMPLATE = `
    <div class="col s12 m4 l4">
        <div class="card">
            <div class="card-content">
                <p id="title"></p>
                <p id="note"></p>
            </div>
            <div class="card-action">
                <a href='#' id="delete">Delete</a>
            </div>
        </div>
    </div>
`;

export default StickyNote;