const fs = require('fs');
const path = require('path');

// Find a note by ID
function deleteNote(id, notesArray) {
    // Create an array of all notes not matching the passed in it
    const updatedNotesArray = notesArray.filter(note => note.id != id);
    // Write the json file to preserve the new notes array with the deletion
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(updatedNotesArray, null, 2)
    );
    return updatedNotesArray;
}

// Create a new note using the body request and the passed in Notes array
function createNewNote(body, notesArray) {
    // Let new note equal the body from the request
    const note = body;
    // Push the new note to the existing array
    notesArray.push(note);
    // Write the json file to preserve the new note
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

function validateNote(note) {
    // Ensure a title is provided and it is a string
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    // Ensure text is entered and it is a string
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    deleteNote,
    createNewNote,
    validateNote
};