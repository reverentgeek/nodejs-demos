var express = require('express');
var router = express.Router();
var users = require('../src/users')( { /* our config info */ } );

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a list of users');
});

router.get('/:id', function (req, res) {
    var user = users.getUserById(req.params.id);
    console.log("User:", user);
    res.render('user', user);
});

module.exports = router;