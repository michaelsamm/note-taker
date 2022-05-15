const fs = require('fs');
const path = require('path');

// Create a new note using the body request and the passed in Notes array
function createNewNote(body, notesArray) {
    // Let new note equal the body from the request
    const note = body;
    // Push the new note to the existing array
    notesArray.push(note);
    // Write the json file to preserve the new note
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
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
    createNewNote,
    validateNote
};