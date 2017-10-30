'use strict';
module.exports = function (app) {
  var notebook = require('../controllers/notebookController');

  // notebook Routes
  app.route('/notebooks')
    .get(notebook.list_all_notebooks)
    .post(notebook.create_a_notebook);

  app.route('/notebooks/:notebookId')
    .get(notebook.read_a_notebook)
    .put(notebook.update_a_notebook)
    .delete(notebook.delete_a_notebook);
};