const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("../models/Product");
const Auction = require("../models/Auction");

async function seedAuctions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    const products = await Product.find({
      status: "LIVE",
    }).limit(5);

    if (products.length === 0) {
      console.log("No LIVE products found.");
      process.exit(1);
    }

    await Auction.deleteMany({});

    const now = new Date();

    const auctions = products.map((product, index) => ({
      product: product._id,

      startingPrice: [
        50000,
        75000,
        60000,
        120000,
        90000,
      ][index] || 50000,

      minimumBidIncrement: 1000,

      startTime: new Date(now.getTime() - 60 * 60 * 1000),

      endTime: new Date(
        now.getTime() + (index + 1) * 24 * 60 * 60 * 1000
      ),

      status: "LIVE",

      currentBid: 0,

      bidSecurityPercentage: 5,
    }));

    await Auction.insertMany(auctions);

    console.log(
      `${auctions.length} auctions created successfully`
    );

    await mongoose.disconnect();
  } catch (error) {
    console.error("Auction seed error:", error);
    process.exit(1);
  }
}

seedAuctions();