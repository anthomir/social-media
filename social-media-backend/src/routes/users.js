const express = require('express');
const { getUser, getUserFriends } = require('../controllers/users');
const { verifyToken } = require('../middleware/jwt');
const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

module.exports = router;
