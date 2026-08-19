import { useState } from "react";

import DrawerHeader from "../auction/AuctionDrawer/DrawerHeader";
import QuickBid from "../auction/QuickBid/QuickBid";
import BidHistory from "../auction/BidHistory/BidHistory";
import AuctionDrawer from "../auction/AuctionDrawer/AuctionDrawer";

import styles from "./AuctionDetails.module.css";

export default function AuctionDetails({ auction, close }) {
  const [openBid, setOpenBid] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  if (!auction) return null;

  return (
    <>
    <DrawerHeader
        title={auction.title}
        subtitle="Live Auction Details"
        // onClose={close}
        
    />
    {/* Scrollable Body */}

    <div className={styles.body}>

        <img
            src={auction.image}
            alt={auction.title}
            className={styles.image}
        />

        <span className={styles.category}>
            {auction.category}
        </span>

        <h2>{auction.title}</h2>

        <div className={styles.stats}>
            ...
        </div>

        <p className={styles.description}>
            ...
        </p>

        {/* Future Components */}

        {/* Seller Card */}

        {/* AI Fraud */}

        {/* Gallery */}

        {/* Specifications */}

    </div>

    {/* Fixed Footer */}
    <div className={styles.footer}>
        <button
            className={styles.bidBtn}
            onClick={() => setOpenBid(true)}
        >
            Place Bid
        </button>

    

        <button
            className={styles.historyBtn}
            onClick={() => setOpenHistory(true)}
        >
            Bid History
        </button>
        

    </div>

      <AuctionDrawer
        open={openBid}
        onClose={() => setOpenBid(false)}
      >
          <QuickBid
          auction={auction}
          close={() => setOpenBid(false)}
          onBidPlaced={(response) => {
            console.log("Bid placed:", response);
          }}
        />
      </AuctionDrawer>

      <AuctionDrawer
        open={openHistory}
        onClose={() => setOpenHistory(false)}
      >
        <BidHistory
          auction={auction}
          close={() => setOpenHistory(false)}
        />
      </AuctionDrawer>
    </>
  );
}