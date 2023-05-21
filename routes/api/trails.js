const express = require('express');

const router = express.Router();
const trailsCtrl = require('../controllers/trails');
const isLoggedIn = require('../config/auth');

router.get('/', trailsCtrl.index);
router.get('/new', isLoggedIn, trailsCtrl.new);
router.get('/:id', trailsCtrl.show);
router.post('/', isLoggedIn, trailsCtrl.create);
router.delete('/:id', trailsCtrl.delete);

module.exports = router;
