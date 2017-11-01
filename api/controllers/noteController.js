'use strict';

var mongoose = require('mongoose'),
    Notebook = mongoose.model('Notebook');


exports.list_all_notes = function (req, res) {
    Notebook.findById(req.params.notebookId, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook.notes);
    });
};

exports.create_a_note = function (req, res) {
    Notebook.findOneAndUpdate({ _id: req.params.notebookId }, { $push: { notes: req.body } }, { new: true }, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
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

exports.update_a_note = function (req, res) {
    let updateQuerry = {}
    Object.keys(req.body).forEach(function (field) {
        updateQuerry["notes.$." + field] = req.body[field];
    });

    Notebook.findOneAndUpdate({ _id: req.params.notebookId, "notes._id": req.params.noteId }, { $set: updateQuerry }, { new: true }, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
    });
};

exports.replace_a_note = function (req, res) {
    Notebook.findOneAndUpdate({ _id: req.params.notebookId, "notes._id": req.params.noteId }, { $set: { "notes.$": req.body } }, { new: true }, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
    });
};

exports.delete_a_note = function (req, res) {
    Notebook.findOneAndUpdate({ _id: req.params.notebookId }, { $pull: { notes: { _id: req.params.noteId } } }, { new: true }, function (err, notebook) {
        if (err)
            res.send(err);
        res.json(notebook);
    });
};