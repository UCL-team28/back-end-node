'use strict';
module.exports = function (app) {
  var notebook = require('../controllers/notebookController'),
    note = require('../controllers/noteController');

  //notebook routes
  app.route('/notebooks')
    .get(notebook.list_all_notebooks)
    .post(notebook.create_a_notebook);

  app.route('/notebooks/:notebookId')
    .get(notebook.read_a_notebook)
    .put(notebook.update_a_notebook)
    .delete(notebook.delete_a_notebook);

  //note routes
  app.route('/notebooks/:notebookId/notes/:noteId')
    .get(note.read_a_note)
    .post(note.replace_a_note)
    .put(note.update_a_note)
    .delete(note.delete_a_note);

  app.route('/notebooks/:notebookId/notes')
    .get(note.list_all_notes)
    .post(note.create_a_note);
};