const User = require('../models/User');
const Auction = require('../models/Auction');
const Bid = require('../models/Bid');

const syncUser = async (req, res) => {
  try {
    const { uid, email, name, picture } = req.user;
    const { phone, accountType, bio, address } = req.body || {};

    let user = await User.findOne({ firebaseUid: uid });
    if (!user) {
      user = await User.create({
        firebaseUid: uid,
        email: email || '',
        name: name || (email ? email.split('@')[0] : 'User'),
        avatar: picture || '',
        phone: phone || '',
        accountType: accountType || 'both',
        bio: bio || '',
        address: address || {},
      });
    } else {
      let updated = false;
      if (email && user.email !== email) { user.email = email; updated = true; }
      if (name && (!user.name || user.name === 'User')) { user.name = name; updated = true; }
      if (picture && !user.avatar) { user.avatar = picture; updated = true; }
      if (updated) await user.save();
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error("SYNC USER ERROR:", error);
    return res.status(500).json({ success: false, message: 'Server error syncing user' });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUid: req.user.uid });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error fetching profile' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, phone, bio, address, avatar, accountType } = req.body;
    const user = await User.findOne({ firebaseUid: req.user.uid });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    if (name !== undefined) user.name = name;
    if (phone !== undefined) user.phone = phone;
    if (bio !== undefined) user.bio = bio;
    if (avatar !== undefined) user.avatar = avatar;
    if (accountType !== undefined) user.accountType = accountType;
    if (address) user.address = { ...user.address, ...address };

    await user.save();
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error updating profile' });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const uid = req.user.uid;
    const user = await User.findOne({ firebaseUid: uid });
    
    const myAuctionsCount = await Auction.countDocuments({ sellerFirebaseUid: uid });
    
    // Check bids using user._id if user exists, fallback to 0
    let activeBidsCount = 0;
    let totalBidsPlaced = 0;
    if (user) {
      const userBids = await Bid.find({ bidder: user._id }).distinct('auction');
      activeBidsCount = await Auction.countDocuments({ _id: { $in: userBids }, status: { $regex: /^LIVE$/i } });
      totalBidsPlaced = await Bid.countDocuments({ bidder: user._id });
    }

    const wonAuctionsCount = await Auction.countDocuments({ winner: user?._id, status: { $regex: /^ENDED$/i } });

    return res.status(200).json({
      success: true,
      data: { 
        myAuctions: myAuctionsCount, 
        activeBids: activeBidsCount, 
        wonAuctions: wonAuctionsCount, 
        totalBids: totalBidsPlaced 
      },
    });
  } catch (error) {
    console.error("DASHBOARD STATS ERROR:", error);
    return res.status(500).json({ success: false, message: 'Server error fetching stats' });
  }
};

const getMyAuctions = async (req, res) => {
  try {
    const firebaseUid = req.user.uid;
    const auctions = await Auction.find({ sellerFirebaseUid: firebaseUid })
      .populate("currentBidder", "name photoURL")
      .sort({ createdAt: -1 });

    return res.status(200).json({ 
      success: true, 
      data: auctions // Standardized to use "data" to match Dashboard.jsx
    });
  } catch (error) {
    console.error("GET MY AUCTIONS ERROR:", error);
    return res.status(500).json({ success: false, message: 'Server error fetching your auctions' });
  }
};

const getMyBids = async (req, res) => {
  try {
    const firebaseUid = req.user.uid;
    const user = await User.findOne({ firebaseUid });
    
    if (!user) {
      return res.status(200).json({ success: true, data: [] });
    }

    const bids = await Bid.find({ bidder: user._id })
      .populate("auction", "title images status currentBid endTime winner")
      .sort({ createdAt: -1 });

    return res.status(200).json({ 
      success: true, 
      data: bids 
    });
  } catch (error) {
    console.error("GET MY BIDS ERROR:", error);
    return res.status(500).json({ success: false, message: 'Server error fetching your bids' });
  }
};

const getWonAuctions = async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUid: req.user.uid });
    if (!user) return res.status(200).json({ success: true, data: [] });

    const auctions = await Auction.find({ winner: user._id, status: { $regex: /^ENDED$/i } })
      .populate('seller')
      .sort({ updatedAt: -1 });
      
    return res.status(200).json({ success: true, data: auctions });
  } catch (error) {
    console.error("WON AUCTIONS ERROR:", error);
    return res.status(500).json({ success: false, message: 'Server error fetching won auctions' });
  }
};

module.exports = { 
  syncUser, 
  getProfile, 
  updateProfile, 
  getDashboardStats, 
  getMyAuctions, 
  getMyBids, 
  getWonAuctions 
};