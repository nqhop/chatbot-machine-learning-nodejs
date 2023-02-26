const express = require('express');
const path = require('path');

const chatsController = require('../controllers/chats');

const router = express.Router();

router.get('/', chatsController.getChat);

module.exports = router;