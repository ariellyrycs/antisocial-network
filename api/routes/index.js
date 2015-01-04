'use strict';
var express = require('express'),
    router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
    res.render('layout', { title: 'Express' });
});/*
router.get('/index', function (req, res) {
    res.render('templates/index.jade', { title: 'Express' });
});
*/

module.exports = router;
