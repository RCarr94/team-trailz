const express = require('express');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/', usersCtrl.create);
router.post('/signin', usersCtrl.login);

// Auth Required
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router
