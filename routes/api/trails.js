const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/api/trails');

// GET /api/trails
router.get('/home', trailsCtrl.index);