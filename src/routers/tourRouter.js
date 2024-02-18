const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const TourController = require('~/app/controllers/TourController');

router.post('/', TourController.create);
router.put('/:id', auth, TourController.update);
router.delete('/:id', auth, TourController.delete);
router.get('/detail/:slug', TourController.detail);
router.get('/search', TourController.search);
router.get('/', TourController.get);
module.exports = router;