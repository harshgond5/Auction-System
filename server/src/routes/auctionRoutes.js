const express = require("express");

const router = express.Router();

const auctionController = require("../controllers/auctionController");
const {authMiddleware} = require("../middleware/authMiddleware");

console.log("AUCTION CONTROLLER:", auctionController);
console.log(
  "getLiveActivity type:",
  typeof auctionController.getLiveActivity
);
console.log(
  "getAuctions type:",
  typeof auctionController.getAuctions
);
console.log(
  "getAuction type:",
  typeof auctionController.getAuction
);

router.post("/", authMiddleware, auctionController.createAuction);

router.get(  "/featured",  auctionController.getFeaturedAuctions);

router.get("/activity/live", auctionController.getLiveActivity);

router.get("/", auctionController.getAuctions);

router.get("/:id/bids", auctionController.getBids);

router.get("/:id", auctionController.getAuction);



module.exports = router;