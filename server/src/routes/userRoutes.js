const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');
const { syncUser, getProfile, updateProfile, getDashboardStats, getMyAuctions, getMyBids, getWonAuctions } = require('../controllers/userController');
const userController = require("../controllers/userController");

router.post('/sync', authMiddleware, syncUser);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
router.get('/dashboard/stats', authMiddleware, getDashboardStats);
router.get('/my-auctions', authMiddleware, getMyAuctions);
router.get('/my-bids', authMiddleware, getMyBids);
router.get('/won-auctions', authMiddleware, getWonAuctions);
router.get('/my-auctions', authMiddleware, userController.getMyAuctions);

module.exports = router;