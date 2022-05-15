const router = require('express').Router();
const uniqid = require('uniqid');
const { createNewNote, validateNote } = require('../../lib/notes'); 
const { notes } = require('../../db/db.json');

// GET /api/notes to return all notes from db.json
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// POST /api/notes save request body object to db.json and return new note to client. Each new note should have unique ID when saved
router.post('/notes', (req, res) => {
    // Assign a unique id to the note
    req.body.id = uniqid();

    // Validate that the note is formatted correctly
    if (!validateNote(req.body)) {
        res.status(400).send('The note is missing a Title or Text.');
    }
    // Create a new note and return the note to the client
    else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
})

module.exports = router;