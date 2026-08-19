const Auction = require("../models/Auction");
const Bid = require("../models/Bid");

/**
 * Closes a single auction if its end time has passed and it is still active.
 * Determines the winner from the highest bid actually stored in the Bid
 * collection (never trusts auction.currentBid alone), and persists it.
 *
 * Safe to call redundantly/concurrently - findOneAndUpdate with a status
 * guard ensures only one call actually performs the transition.
 */
async function closeAuctionIfExpired(auctionId) {
  const now = new Date();

  // Atomically flip status -> "ended" only if it's currently "active" and
  // past its endTime. This prevents two concurrent requests from both
  // thinking they're the one responsible for closing it.
  const auction = await Auction.findOneAndUpdate(
    {
      _id: auctionId,
      status: "active",
      endTime: { $lte: now },
    },
    {
      $set: { status: "ended" },
    },
    { new: true }
  );

  if (!auction) {
    return null;
  }

  const topBid = await Bid.findOne({ auction: auction._id })
    .sort({ amount: -1, createdAt: 1 })
    .populate("bidder", "name email photoURL");

  if (topBid) {
    auction.winner = topBid.bidder._id;
    auction.winningBid = topBid.amount;
  }

  await auction.save();

  return auction;
}

/**
 * Sweeps all auctions that are still marked "active" but whose endTime has
 * passed, closing each one and determining its winner. Used by the periodic
 * background job in app.js.
 */
async function closeAllExpiredAuctions() {
  const now = new Date();

  const expired = await Auction.find({
    status: "active",
    endTime: { $lte: now },
  }).select("_id");

  for (const { _id } of expired) {
    try {
      await closeAuctionIfExpired(_id);
    } catch (error) {
      console.error(`Failed to close auction ${_id}:`, error.message);
    }
  }
}

module.exports = {
  closeAuctionIfExpired,
  closeAllExpiredAuctions,
};
