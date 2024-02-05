const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const DealController = require('~/app/controllers/DealController');

router.post('/', DealController.create);
router.put('/:id', auth, DealController.update);
router.delete('/:id', auth, DealController.delete);
router.get('/', DealController.get);
module.exports = router;