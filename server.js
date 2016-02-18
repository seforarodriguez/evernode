'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const Note = mongoose.model('Notes', mongoose.sCHEMA({
  title: String,
  text: String
}));

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended:false
}));

app.get('/', (req, res) => {
  res.send('Server Running! Catch it before it runs too far!')
});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});

app.post('/notes', (req, res) => {
  Note.create(req.body, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
}); 

mongoose.connect('mongodb://localhost:27017/evernode', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Evernode Server running on port ${port}`);
  });
});

