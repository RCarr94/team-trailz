const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/api/trails');

// GET /api/trails
router.get('/', trailsCtrl.index);

router.get('/:id', trailsCtrl.getById);

router.post('/', trailsCtrl.create);

module.exports = router;