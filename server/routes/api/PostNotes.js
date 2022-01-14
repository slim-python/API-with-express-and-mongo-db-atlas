const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const router = express.Router();
const note = require('../../models/notes');

// post notes
router.post('/', async (req, res) => {
  const newNote = new note({
    msg: req.body.msg
  })
  newNote
    .save()
    .then(item => console.log(item))
    .catch(err => console.log(err));

    //notifying the user that thier data has been send after making the post request to databse
    await res.send("your data has been sent to backend");
});



module.exports = router;