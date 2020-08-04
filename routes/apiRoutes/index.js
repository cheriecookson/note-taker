const router = require('express').Router();
const { notes } = require('../db/db.json');
const { uuidv4 } = require('uuid');
const fs = require("fs");

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// How do I use uuidv4(); ??????????????

router.post('/notes', (req, res) => {
   req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
      );
      return notes;
  
});



router.delete('/notes/:id', (req, res, next)  =>  {
    Room.findByIdAndRemove(req.params.id, req.body, (err, post) => {
     if (err) return next(err);
     res.json(post);
    });
   });


module.exports = router;









