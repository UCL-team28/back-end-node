var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    models.notebook.findAll({
        include: [models.note]
    }).then(function(notebooks) {
        res.json(notebooks);
    });
});

module.exports = router;