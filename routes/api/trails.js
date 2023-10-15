const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/api/trails');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/trails
router.get('/', trailsCtrl.index);

router.get('/:id', trailsCtrl.getById);

router.post('/', ensureLoggedIn, trailsCtrl.create);

module.exports = router;