const express = require('express');
const { register, login, getMe, updatePreferences } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/me', protect, getMe);

router.put('/preferences', protect, updatePreferences);

export default router;
