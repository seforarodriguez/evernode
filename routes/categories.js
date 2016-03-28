'use strict';

const express = require('express');
const router = express.Router();
const categories = require('../controllers/categories');

router
  .get('/categories', categories.index)
  .post('/categories', categories.create)
  .get('/categories/new', categories.newCat)

module.exports = router;