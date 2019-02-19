var express = require('express');
const router = express.Router();

router.post("*", function(request, response){
    console.log('дарова');
    var a={'a':'1'};
 
    response.send(a);
    response.end();
});

module.exports = {
    router: router
};