var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc){
        if(err){
            return res.send("Error!");
        }
        res.render('index', {email: doc.email});
    });
});

router.post('/', function(req, res, next){
    var email = req.body.email;
    var first = req.body.email;
    var last = req.body.email;
    var user = new User({
        firstName: first,
        lastName: last,
        password :'test1234',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
