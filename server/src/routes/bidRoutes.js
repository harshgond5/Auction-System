const express = require("express");

const router = express.Router();

const {authMiddleware} = require("../middleware/authMiddleware");

const {
    getBids,
    placeBid,
} = require("../controllers/bidController");


// GET BID HISTORY
router.get(
    "/auctions/:auctionId/bids",
    getBids
);


// PLACE BID
router.post(
    "/auctions/:auctionId/bids",
    authMiddleware,
    placeBid
);


module.exports = router;