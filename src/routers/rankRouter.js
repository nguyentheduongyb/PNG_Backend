const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const RankController = require('~/app/controllers/RankController');

router.post('/', RankController.create);
router.put('/:id', auth, RankController.update);
router.delete('/:id', auth, RankController.delete);
router.get('/', auth, RankController.get);
module.exports = router;