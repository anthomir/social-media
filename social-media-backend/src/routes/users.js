const express = require('express');
const { getUser, createUser } = require('../controllers/users');
const { verifyToken } = require('../middleware/jwt');
const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.post('/', createUser);
module.exports = router;
