'use strict';

const router = require('express').Router();
const notes = require('../controller/notesController');

router.get('/notes', notes.getNotes);
router.post('/notes', notes.insertNote);
router.put('/notes', notes.updateNote);

router.get('/notes/count', notes.countNotes);

router.put('/notes/finish/:id', notes.finishNote);
router.put('/notes/unfinish/:id', notes.unfinishNote);

router.get('/notes/:id', notes.getNote);
router.delete('/notes/:id', notes.deleteNote);

module.exports = router;
