var express = require('express');
var router = express.Router();

var startupIdeas = [
      {category: 'technology', id: 1, name: 'api for livestock'},
      {category: 'technology', id: 2, name: 'bots on bicycles'},
      {category: 'technology', id: 3, name: 'virtual reality for office meetings'}  
    ];

/* GET users listing. */
router.get('/', function(req, res, next) {
   
    //return all ideas
    res.send(startupIdeas);
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
   
   var startupid = req.params.id;
   
    //return all ideas
    res.send(startupIdeas[startupid-1]);
});

module.exports = router;