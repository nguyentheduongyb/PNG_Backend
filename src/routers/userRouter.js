const express = require('express');
const auth = require('~/app/middlewares/auth.js')
const router = express.Router();

const UserController = require('~/app/controllers/UserController');

router.post('/', UserController.create);
router.put('/:id', auth, UserController.update);
router.delete('/:id', auth, UserController.delete);
router.get('/', UserController.booking);
// router.get('/', auth, UserController.get);
module.exports = router;