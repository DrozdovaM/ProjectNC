const express = require('express');
const router = express.Router();
const Student = require('../models/StudentSchema');

router.get("*", function(req, res){
    Student.find({}, function(err, doc){
        if(err){
            return console.log(err);
        }

        res.send(doc);

        res.end();
    });
});

module.exports = {
    router: router
};