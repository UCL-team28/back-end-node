var models = require('../models');
var express = require('express');
var router = express.Router();

var ok = {
    ok: true
};

router.get('/me', function(req, res) {
    models.user.findOne({
        attributes: {
            exclude: ['password']
        }
    }).then(function(user) {
        res.json(user);
    });
});

module.exports = router;