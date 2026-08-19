const Bid = require("../models/Bid");
const Auction = require("../models/Auction");
const User = require("../models/User");


// ===============================
// GET BIDS
// ===============================

// GET BID HISTORY FOR AUCTION
exports.getBids = async (req, res) => {
  try {
    console.log("=================================");
    console.log("GET BID HISTORY");
    console.log("Auction ID:", req.params.id);
    console.log("=================================");

    const bids = await Bid.find({
      auction: req.params.id,
    })
      .populate("bidder", "name photoURL")
      .sort({ createdAt: -1 });

    console.log("Bids found:", bids.length);
    console.log("Bids:", bids);

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


// ===============================
// PLACE BID
// ===============================

exports.placeBid = async (req, res) => {

    try {

        const { auctionId } = req.params;

        const {
            amount,
            consentAccepted
        } = req.body;


        // --------------------------------
        // 1. CHECK USER
        // --------------------------------

        if (!req.user) {

            return res.status(401).json({
                success: false,
                message: "You must be logged in to place a bid"
            });

        }


        // --------------------------------
        // 2. CHECK CONSENT
        // --------------------------------

        if (consentAccepted !== true) {

            return res.status(400).json({
                success: false,
                message: "Bid consent is required"
            });

        }


        // --------------------------------
        // 3. VALIDATE AMOUNT
        // --------------------------------

        if (!amount || Number(amount) <= 0) {

            return res.status(400).json({
                success: false,
                message: "Invalid bid amount"
            });

        }


        // --------------------------------
        // 4. FIND AUCTION
        // --------------------------------

        const auction =
            await Auction.findById(auctionId);

        if (!auction) {

            return res.status(404).json({
                success: false,
                message: "Auction not found"
            });

        }


        // --------------------------------
        // 5. CHECK AUCTION STATUS
        // --------------------------------

        if (auction.status !== "LIVE" && auction.status !== "active") {

            return res.status(400).json({
                success: false,
                message: "This auction is not live"
            });

        }


        // --------------------------------
        // 6. CHECK AUCTION TIME
        // --------------------------------

        const now = new Date();

        if (
            auction.startTime &&
            now < auction.startTime
        ) {

            return res.status(400).json({
                success: false,
                message: "Auction has not started yet"
            });

        }


        if (
            auction.endTime &&
            now > auction.endTime
        ) {

            return res.status(400).json({
                success: false,
                message: "Auction has ended"
            });

        }


        // --------------------------------
        // 7. CHECK MINIMUM BID
        // --------------------------------

        const currentBid =
            auction.currentBid || auction.startingPrice || 0;

        const minimumIncrement =
            auction.minimumBidIncrement || 1;

        const minimumRequired =
            currentBid + minimumIncrement;


        if (Number(amount) < minimumRequired) {

            return res.status(400).json({

                success: false,

                message:
                    `Minimum bid is ₹${minimumRequired.toLocaleString()}`

            });

        }


        // --------------------------------
        // 8. FIND USER
        // --------------------------------

        const bidder =
            await User.findOne({
                firebaseUid: req.user.uid
            });

        if (!bidder) {

            return res.status(404).json({
                success: false,
                message: "User profile not found"
            });

        }


        // --------------------------------
        // 9. PREVENT SELLER BIDDING
        // --------------------------------

        if (
            auction.seller &&
            auction.seller.toString() ===
            bidder._id.toString()
        ) {

            return res.status(403).json({
                success: false,
                message: "Seller cannot bid on their own auction"
            });

        }


        // --------------------------------
        // 10. CALCULATE SECURITY
        // --------------------------------

        const securityPercentage =
            auction.bidSecurityPercentage || 5;

        const securityAmount =
            Number(amount) *
            securityPercentage /
            100;


        // --------------------------------
        // 11. CREATE BID
        // --------------------------------

        const bid = await Bid.create({

            auction: auction._id,

            bidder: bidder._id,

            amount: Number(amount),

            securityAmount,

            securityPercentage,

            consentAccepted: true,

            consentAcceptedAt: new Date(),

            status: "PENDING"

        });


        // --------------------------------
        // 12. UPDATE AUCTION
        // --------------------------------

        const updatedAuction = await Auction.findByIdAndUpdate(
    auction._id,
    {
        $set: {
            currentBid: Number(amount),
            currentBidder: bidder._id,
        },
        $inc: {
            totalBids: 1,
        },
    },
    {
        new: true,
        runValidators: false,
    }
);


        // --------------------------------
        // 13. RESPONSE
        // --------------------------------

        res.status(201).json({

            success: true,

            message: "Bid placed successfully",

            bid: {

                id: bid._id,

                amount: bid.amount,

                securityAmount:
                    bid.securityAmount,

                securityPercentage:
                    bid.securityPercentage,

                status:
                    bid.status,

                createdAt:
                    bid.createdAt

            }

        });


    } catch (error) {

        console.error(
            "PLACE BID ERROR:",
            error
        );

        res.status(500).json({

            success: false,

            message: "Failed to place bid"

        });

    }

};

exports.getLiveActivity = async (req, res) => {
    try {

        const bids = await Bid.find()
            .populate("bidder", "name photoURL")
            .populate("auction", "title")
            .sort({ createdAt: -1 })
            .limit(20);

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