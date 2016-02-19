'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const note = require('./routes/note');
const categories = require('./route/categories');

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Server Running! Catch it before it runs too far!')
});

//routes
app.use(note);
app.use(categories);

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode Server running on port ${port}`);
  });
});

