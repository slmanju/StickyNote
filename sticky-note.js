'use strict';

class StickyNote extends HTMLElement {

    constructor() {
        super();
        console.log('inside the constructor');
    }

    // Fires when an instance of the element is created.
    createdCallback() {
        this.innerHTML = StickyNote.TEMPLATE;
        this.$noteElement = this.querySelector('.note');
    };

    // Fires when an instance was inserted into the document.
    attachedCallback() {
        console.log('inside the attachedCallback');
    };

    // Fires when an instance was removed from the document.
    detachedCallback() {};
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {};

    setNote(note) {
        console.log(note);
        this.$noteElement.textContent = note.note;
    }

}

StickyNote.TEMPLATE = `
    <div class="col s12 m4 l4">
        <div class="card">
            <div class="card-content">
                <p class="note">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div class="card-action">
                <a href='#'>Delete</a>
            </div>
        </div>
    </div>
`;

export default StickyNote;