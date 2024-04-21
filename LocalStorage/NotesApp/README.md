# NoteApp

NoteApp is a simple JavaScript application designed to create, display, and store notes in the web browser using local storage. This application allows users to input text into a web page and have that data persist across sessions through the use of local storage.

## Features

- **Add Notes:** Users can add notes via a text input.
- **Display Notes:** Notes are displayed immediately upon addition and upon subsequent page loads.
- **Persistent Storage:** Notes are stored in the browser's local storage, making them persistent between browser sessions.

## How to Use

To use NoteApp, simply include the script in your HTML and ensure the following HTML elements are present in your document:

1. A container element with an ID where notes will be displayed. (e.g., `<ul id="notesContainer"></ul>`)
2. An input text area for entering notes. (e.g., `<textarea id="noteInput"></textarea>`)
3. A button to trigger the save action. (e.g., `<button id="saveNote">Save Note</button>`)

## Code Overview
