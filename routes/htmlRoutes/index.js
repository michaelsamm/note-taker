const path = require('path');
const router = require('express').Router();

// Navigate to home page for URL ending /
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Navigate to notes page for URL ending /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Set a catchall for other endpoints to direct to the home page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public.index.html'));
});

module.exports = router;
