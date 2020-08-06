const router = require('express').Router();
const notes = require('../../db/db.json');
// const { uuid } = require('uuidv4');
const fs = require("fs");
const noteIDs = notes.map(note => note.id);
const path = require('path');

router.get('/notes', (req, res) => {
// console.log(uuid());
  res.json(notes);
});

router.post('/notes', (req, res) => {
  let newID = 0;
  while(noteIDs.includes(newID)) {
    newID++;
  }
   req.body.id = newID;
   noteIDs.push(newID);

    const note = req.body;
    notes.push(note);
    res.json(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notes, null, 2)
      );
});

module.exports = router;









