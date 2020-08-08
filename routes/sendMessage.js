const router = require('express').Router();

const {
  sendMessage,
  reciveMessage
} = require('../controllers/sendMessage');

router.post('/sendMessage', sendMessage);
router.post('/receiveMessage', reciveMessage);

module.exports = router;