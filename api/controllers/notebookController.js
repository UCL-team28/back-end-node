'use strict';

var mongoose = require('mongoose'),
    Notebook = mongoose.model('Notebook'),
    Note = mongoose.model('Note');

exports.list_all_notebooks = function (req, res) {
    Notebook.find({}, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
    });
};

exports.create_a_notebook = function (req, res) {
    var new_notebook = new Notebook(req.body);
    new_notebook.save(function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
    });
};

exports.read_a_notebook = function (req, res) {
    Notebook.findById(req.params.notebookId, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
    });
};

exports.update_a_notebook = function (req, res) {
    Notebook.findOneAndUpdate({ _id: req.params.notebookId }, req.body, { new: true }, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
    });
};

exports.delete_a_notebook = function (req, res) {
    Notebook.remove({
        _id: req.params.notebookId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Notebook successfully deleted' });
    });
};


exports.list_all_notes = function (req, res) {
    Notebook.findById(req.params.notebookId, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook.notes);
    });
};

exports.read_a_note = function (req, res) {
    Notebook.findById(req.params.notebookId, function (err, notebook) {
        if (err)
            res.send(err);
        let note = notebook.notes.id(req.params.noteId)
        res.json(note);
    });
};