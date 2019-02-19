const express = require("express");
const router = express.Router();
const Student = require('../models/StudentSchema');

router.post("*", function(request, response){

    Student.remove({_id: request.body._id}, function(err, doc){


        if(err){
            return console.log(err);
        }

        response.end();
    })

});

module.exports = {
    router: router
};