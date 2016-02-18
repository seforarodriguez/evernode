'use strict';

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server Running! Catch it before it runs too far!')
});

app.listen(port, () => {
  console.log(`Evernode Server running on port ${port}`);
});
