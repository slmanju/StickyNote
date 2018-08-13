!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class i extends HTMLElement{constructor(){super()}createdCallback(){this.innerHTML=i.TEMPLATE,this.$note="",this.$noteElement=this.querySelector("#note"),this.$titleElement=this.querySelector("#title"),this.$deleteElement=this.querySelector("#delete"),this.$deleteElement.addEventListener("click",()=>this.deleteNote())}deleteNote(){this.parentNode.removeChild(this);var e=new CustomEvent("noteDelete",{detail:this.$note});this.dispatchEvent(e)}attachedCallback(){}detachedCallback(){}attributeChangedCallback(e,t,n){}setNote(e){this.$noteElement.textContent=e.note,this.$titleElement.textContent=e.title,this.$note=e}}i.TEMPLATE='\n    <div class="col s12 m4 l4">\n        <div class="card">\n            <div class="card-content">\n                <p id="title" style="font-weight: bold;"></p>\n                <p id="note" style="font-style: italic;"></p>\n            </div>\n            <div class="card-action">\n                <a href=\'#\' id="delete">Delete</a>\n            </div>\n        </div>\n    </div>\n';var o=i;var s=class{constructor(){this.notesContainer=document.getElementById("notes"),this.noteInput=document.getElementById("note"),this.titleInput=document.getElementById("title"),this.saveButton=document.getElementById("saveButton"),this.$savedNotes=JSON.parse(localStorage.getItem("notes"))||[],this.saveButton.addEventListener("click",()=>this.saveNote()),this.$savedNotes.forEach(e=>this.displayNote(e))}displayNote(e){let t=document.createElement("sticky-note");t.setNote(e),t.addEventListener("noteDelete",e=>this.deleteNote(e.detail)),this.notesContainer.appendChild(t)}saveNote(){if(this.noteInput.value){let e={id:Date.now().toString(),title:this.titleInput.value,note:this.noteInput.value};this.displayNote(e),this.$savedNotes.push(e),this.saveLocaly(),this.noteInput.value="",this.titleInput.value=""}}deleteNote(e){this.$savedNotes=this.$savedNotes.filter(t=>t!==e),this.saveLocaly()}saveLocaly(){localStorage.setItem("notes",JSON.stringify(this.$savedNotes))}};document.registerElement("sticky-note",o),window.addEventListener("load",()=>new s)}]);