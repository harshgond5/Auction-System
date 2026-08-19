const Auction = require("../models/Auction");
const Bid = require("../models/Bid");
const User = require("../models/User"); // Added to find the seller by Firebase UID

// GET ALL LIVE AUCTIONS
exports.getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({
      status: "LIVE",
    })
      .populate("seller", "name email photoURL rating")
      .populate("currentBidder", "name photoURL")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: auctions,
    });
  } catch (error) {
    console.error("GET AUCTIONS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch auctions",
      error: error.message,
    });
  }
};

// GET SINGLE AUCTION
exports.getAuction = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id)
      .populate("seller", "name email photoURL rating")
      .populate("currentBidder", "name photoURL");

    if (!auction) {
      return res.status(404).json({
        success: false,
        message: "Auction not found",
      });
    }

    res.json({
      success: true,
      data: auction,
    });
  } catch (error) {
    console.error("GET AUCTION ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch auction",
      error: error.message,
    });
  }
};

// FEATURED AUCTIONS
exports.getFeaturedAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({
      status: "LIVE",
    })
      .populate("seller", "name email photoURL rating")
      .populate("currentBidder", "name photoURL")
      .sort({ totalBids: -1, createdAt: -1 })
      .limit(8);

    res.json({
      success: true,
      data: auctions,
    });
  } catch (error) {
    console.error("FEATURED AUCTIONS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch featured auctions",
      error: error.message,
    });
  }
};

// LIVE ACTIVITY
exports.getLiveActivity = async (req, res) => {
  try {
    const bids = await Bid.find({ status: "PENDING" })
      .populate("bidder", "name photoURL")
      .populate("auction", "title")
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      activity: bids
    });
  } catch (error) {
    console.error("LIVE ACTIVITY ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to load live activity"
    });
  }
};

// GET BID HISTORY FOR AUCTION
exports.getBids = async (req, res) => {
  try {
    const { id } = req.params;

    const bids = await Bid.find({
      auction: id,
      status: "PENDING",
    })
      .populate("bidder", "name photoURL")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: bids,
    });
  } catch (error) {
    console.error("GET BIDS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bid history",
      error: error.message,
    });
  }
};

// ==========================================
// CREATE AUCTION (NEW)
// ==========================================
exports.createAuction = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      condition,
      images,
      startingPrice,
      minimumBidIncrement,
      startTime,
      endTime
    } = req.body;

    // 1. Get Firebase UID from auth middleware
    const firebaseUid = req.user.uid;

    // 2. Find matching MongoDB User
    const seller = await User.findOne({ firebaseUid: firebaseUid });

    if (!seller) {
      return res.status(404).json({
        success: false,
        message: "Seller profile not found in database. Please log in again."
      });
    }

    // 3. Determine Initial Status
    const isScheduled = new Date(startTime) > new Date();

    // 4. Create the Auction
    const auction = await Auction.create({
      title,
      description,
      category,
      condition,
      images: images || [],
      startingPrice,
      minimumBidIncrement,
      currentBid: 0,
      seller: seller._id, // Set securely from backend lookup
      sellerFirebaseUid: firebaseUid,
      startTime,
      endTime,
      status: isScheduled ? "SCHEDULED" : "LIVE"
    });

    // 5. Send Success Response
    res.status(201).json({
      success: true,
      message: "Auction created successfully",
      data: auction
    });

  } catch (error) {
    console.error("CREATE AUCTION ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create auction"
    });
  }
};