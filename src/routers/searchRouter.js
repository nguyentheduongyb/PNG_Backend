const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const SearchController = require('~/app/controllers/SearchController');

router.get('/:slug', SearchController.get);
module.exports = router;