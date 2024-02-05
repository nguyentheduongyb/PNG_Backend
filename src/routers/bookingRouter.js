const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const BookingController = require('~/app/controllers/BookingController');

router.post('/', BookingController.create);
router.put('/:id', auth, BookingController.update);
router.delete('/:id', auth, BookingController.delete);
router.get('/', auth, BookingController.get);
module.exports = router;