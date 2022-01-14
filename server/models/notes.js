const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NotesSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
  dateOfEntry: {
    type: Date,
    default: Date.now()
  }
});
module.exports = Item = mongoose.model('note', NotesSchema);