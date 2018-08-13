'use strict';

class StickyNote extends HTMLElement {

    constructor() {
        super();
    }

    // Fires when an instance of the element is created.
    createdCallback() {
        this.innerHTML = StickyNote.TEMPLATE;
        this.$noteElement = this.querySelector('.note');
        this.$deleteElement = this.querySelector('.delete');
        this.$deleteElement.addEventListener('click', () => {
            var event = new Event('noteDelete');
            this.dispatchEvent(event);
        });
    };

    // Fires when an instance was inserted into the document.
    attachedCallback() {};

    // Fires when an instance was removed from the document.
    detachedCallback() {};

    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback(attr, oldVal, newVal) {};

    setNote(note) {
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
                <a href='#' class="delete">Delete</a>
            </div>
        </div>
    </div>
`;

export default StickyNote;