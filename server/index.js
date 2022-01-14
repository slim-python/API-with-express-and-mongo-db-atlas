const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const note = require('./models/notes');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });
const DB = process.env.DATABASE;


//DATABSE connection setup
mongoose.connect(DB, {
  useUnifiedTopology: true,
}).then(() => {
  console.log("databse connected");

}).catch((err) => {
  console.log(err);
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


//routes
const getposts = require('./routes/api/PostNotes');
app.use('/api/sendnotes', getposts);

const showposts = require('./routes/api/GetNotes');
app.use('/api/shownotes', showposts);



//main route which shows json data 
app.get('/', async (req, res) => {
  res.send("<pre>use /api/shownotes route to get all the messages from the database </br>and use /api/sendnotes to make post reuest into the database</pre>");
});



const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));