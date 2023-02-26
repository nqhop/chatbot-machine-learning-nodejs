const express = require('express');

const chatsController = require('../controllers/chats');

const router = express.Router();

router.get('/new_message', chatsController.partial);

module.exports = router;