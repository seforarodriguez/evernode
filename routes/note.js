'use strict';

const express = require('express');
const router = express.Router();
const note = require('../controllers/note');

router
  .get('/notes', note.index)
  .get('/notes/new', note.newNote)
  .get('/notes/:id', note.show)
  .get('/notes/:id/edit', note.edit)
  .put('/notes/:id', note.update)
  .delete('/notes/:id', note.destroy)
  .post('/notes', note.create)

module.exports = router;