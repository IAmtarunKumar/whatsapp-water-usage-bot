const express = require('express');
const botController = require('../controllers/botController');

const router = express.Router();

router.post('/webhook', botController.handleIncomingMessage);

module.exports = router;
