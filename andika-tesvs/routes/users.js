'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render("users", {title: "Users Page", msg:"Wow What?", name: req.query.daName});
});

module.exports = router;
