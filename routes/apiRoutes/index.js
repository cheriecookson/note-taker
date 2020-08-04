const { db } = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');


router.get('/notes', (req, res) => {
    const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
  
    if (!validateNotes(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
  });

  
  
  module.exports = router;




// const { v4: uuidv4 } = require('uuid');

// uuidv4();


// fs.readFile('../db/db.json', 'utf8', function(err, data){ 
      
//     // Display the file content 
//     console.log(data); 
// }); 
  
// console.log('readFile called'); 