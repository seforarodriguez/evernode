'use strict';

const express = require('express');
const router = express.Router();
const categories = require('../controllers/categories');

router.get('/categories', categories.index);
router.put('/categories', categories.create);
router.get('/categories/new', categories.newCategorie);

module.exports = router;