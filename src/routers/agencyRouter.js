const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const AgencyController = require('~/app/controllers/AgencyController');

router.post('/', AgencyController.create);
router.put('/:id', auth, AgencyController.update);
router.delete('/:id', auth, AgencyController.delete);
router.get('/', AgencyController.get);
module.exports = router;