const express = require('express');
const router = express.Router();
const Student = require('../models/StudentSchema');

router.post("*", function(req, res){
    const student = new Student(req.body);

    student.save(function(err){
        if(err){
            return console.log(err);
        }
        console.log("Object saved", student);
    });
    res.send({message: "you have successfully"});

    res.end();
})

module.exports = {
    router: router
};