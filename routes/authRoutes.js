const express = require('express');
const authController = require('../controllers/authController');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;