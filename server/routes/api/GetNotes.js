const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const router = express.Router();
const note = require('../../models/notes');


// Get Posts
router.get('/', async (req, res) => {
    note.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});



module.exports = router;