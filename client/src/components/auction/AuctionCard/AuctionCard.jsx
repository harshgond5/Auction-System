import { useState } from "react";
import AuctionDetails from "../../auctionDetails/AuctionDetails";

import styles from "./AuctionCard.module.css";

export default function AuctionCard({ auction, onView }) {
  return (
    <>
      <div className={styles.card}>
        <img
          src={auction.image}
          alt={auction.title}
          className={styles.image}
        />

        <div className={styles.content}>
          <span className={styles.category}>
            {auction.category}
          </span>

          <h3>{auction.title}</h3>

          <div className={styles.info}>
            <div>
              <small>Current Bid</small>
              <strong>{auction.price}</strong>
            </div>

            <div>
              <small>Bids</small>
              <strong>{auction.bids}</strong>
            </div>
          </div>

          <div className={styles.footer}>
            <span>⏳ {auction.timeLeft}</span>

            <button
    className={styles.button}
    onClick={() => onView(auction)}
>
    View Auction
</button>
          </div>
        </div>
      </div>

    
    </>
  );
}