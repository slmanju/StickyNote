'use strict';

import StickyNote from './sticky-note.js';
import StickyNotesApp from './sticky-note-app.js';

document.registerElement('sticky-note', StickyNote);

window.addEventListener('load', () => new StickyNotesApp());