const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    condition: {
      type: String,
      default: "Used",
    },

    startingPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    currentBid: {
      type: Number,
      default: 0,
      min: 0,
    },

    minimumBidIncrement: {
      type: Number,
      default: 100,
      min: 1,
    },

    currentBidder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    sellerFirebaseUid: {
      type: String,
      required: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "DRAFT",
        "SCHEDULED",
        "LIVE",
        "ENDED",
        "CANCELLED",
      ],
      default: "LIVE",
    },

    totalBids: {
      type: Number,
      default: 0,
    },

    bidSecurityPercentage: {
      type: Number,
      default: 5,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Auction", auctionSchema);