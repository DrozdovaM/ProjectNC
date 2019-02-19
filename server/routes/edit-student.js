const express = require("express");
const router = express.Router();
const Student = require('../models/StudentSchema');

router.post("*", function(request, response){

    Student.findOneAndUpdate(
        {_id: request.body._id},
        {$set: {
            lastName: request.body.lastName,
            firstName: request.body.firstName,
            patronymic: request.body.patronymic,
            birthDay: request.body.birthDay,
            gpa: request.body.gpa,
        }}, 
        function(err, doc){

        if(err){
            return console.log(err);
        }
        
        console.log(doc);

        response.end();

    })

});

module.exports = {
    router: router
};