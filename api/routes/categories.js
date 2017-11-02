var models = require('../models');
var express = require('express');
var router = express.Router();

var ok = {
    ok: true
};

router.get('/', function(req, res) {
    models.category.findAll()
    .then(function(user) {
        res.json(user);
    });
});

router.delete('/:id', function(req, res) {
    models.category.destroy({
        where: { id: req.params.id },
    }).then(function(notebook) {
        res.json(ok);
    });
});

router.post('/', function(req, res) {
    const newCat = req.body;

    const cat = models.category.build({
        category: newCat.category,
    });

    cat.save()
        .then(saved => {
            res.json(ok);
        })
        .catch(error => {
            res.json(error);
        });
});

module.exports = router;