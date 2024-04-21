// Define the NoteApp class
class NoteApp {
  // Constructor initializes the NoteApp with selectors for the DOM elements it will interact with.
  constructor(containerSelector, inputSelector, saveButtonSelector) {
    // Select the container element where notes will be displayed
    this.container = document.querySelector(containerSelector);
    // Select the text input element for entering new notes
    this.textArea = document.querySelector(inputSelector);
    // Select the button element that will be used to save new notes
    this.saveButton = document.querySelector(saveButtonSelector);
    // Retrieve notes from localStorage or initialize an empty array if none exist
    this.notes = JSON.parse(localStorage.getItem("notes")) ?? [];

    // Add event listener for the save button click event
    this.saveButton.addEventListener("click", () => this.saveNote());
    // Load any existing notes into the view
    this.loadNotes();
  }

  // Method to load notes from storage and render them in the list
  loadNotes() {
    this.notes.forEach((note) => {
      this.createNote(note);
    });
  }

  // Method to create a new note element and add it to the DOM
  createNote(note) {
    const noteElement = document.createElement("li"); // Create a new list item element
    noteElement.textContent = note; // Set the content of the list item to the note text
    this.container.appendChild(noteElement); // Append the new list item to the container
  }

  // Method to save the new note from the textarea to the notes array and update local storage
  saveNote() {
    const noteContent = this.textArea.value.trim(); // Trim whitespace from the input value
    if (noteContent) {
      // If there is content to save
      this.createNote(noteContent); // Create a new note in the DOM
      this.textArea.value = ""; // Clear the input area
      this.notes.push(noteContent); // Add the new note to the notes array
      this.updateLocalStorage(); // Update local storage with the new notes array
    }
  }

  // Method to update localStorage with the current state of notes
  updateLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(this.notes)); // Serialize the notes array to JSON and store it
  }
}

// Create a new instance of NoteApp targeting specific DOM elements
new NoteApp("#notesContainer", "#noteInput", "#saveNote");
