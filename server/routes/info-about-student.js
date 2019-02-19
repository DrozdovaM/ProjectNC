const express = require("express");
const router = express.Router();
const Student = require('../models/StudentSchema');

router.post("*", function(request, response){

    Student.findOne({_id: request.body.id}, function(err, doc){
        if(err){
            return console.log(err);
        } 

        console.log(doc);

        response.send(doc);
        
        response.end();
    })

});

module.exports = {
    router: router
};