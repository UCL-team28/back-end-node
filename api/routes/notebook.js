var models = require('../models');
var media = require('../media');
var express = require('express');
var router = express.Router();

var ok = {
    ok: true
};

var nope = {
    ok: false
};

router.get('/:id', function(req, res) {
    models.notebook.findOne({
        where: { id: req.params.id },
        include: {
            model: models.note,
            include: {
                model: models.category,
                attributes: {
                    exclude: ['id']
                }
            },
            attributes: [
                'id', 'name', 'content', 'media', 'media_type', [models.sequelize.fn('date_format', models.sequelize.col('created'), '%Y-%m-%d'), 'created']
            ],
            order: [
                ['created', 'DESC']
            ],
        },
        attributes: {
            exclude: ['user_id']
        },
    }).then(function(notebook) {
        res.json(notebook);
    });
});

router.delete('/:id', function(req, res) {
    models.notebook.destroy({
        where: { id: req.params.id },
    }).then(function(notebook) {
        res.json(ok);
    });
});

router.post('/:nid/note', function(req, res) {
    const newNote = req.body;
    console.log(newNote);

    const note = models.note.build({
        created: new Date(),
        notebook_id: req.params.nid,
        name: newNote.name,
        content: newNote.content,
        category_id: newNote.category_id,
    });

    if (newNote.media && newNote.mediaType) {
        var saved = media.save(newNote.media, newNote.mediaType);
        var type = media.type(newNote.mediaType);

        note.media = saved;
        note.media_type = type;
    }

    note.save()
        .then(saved => {
            res.json(ok);
        })
        .catch(error => {
            res.json(error);
        });
});

router.delete('/:nid/note/:id', function(req, res) {
    models.note.destroy({
        where: {
            notebook_id: req.params.nid,
            id: req.params.id
        },
    }).then(function(note) {
        res.json(ok);
    });
});

module.exports = router;