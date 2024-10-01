const express = require('express');
const router = express.Router();
const { getTopics, updateProgress } = require('../controllers/topicController');
const auth = require('../middleware/auth');

router.get('/', auth, getTopics);
router.post('/mark-complete', auth, updateProgress);

module.exports = router;
