import { useEffect, useState } from "react";
import styles from "./AuctionCard.module.css";
import {
    formatCurrency,
    formatTimeLeft,
    resolveImageUrl
} from "../../../utils/format";

export default function AuctionCard({ auction, onView }) {

    // Properties are directly on the auction object, so we use auction.endTime, auction.title, etc.
    const [timeLeft, setTimeLeft] = useState(formatTimeLeft(auction.endTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(formatTimeLeft(auction.endTime));
        }, 1000);
        return () => clearInterval(interval);
    }, [auction.endTime]);

    return (
        <div className={styles.card}>
            <img
                // CHANGED: Use auction.images instead of product.images
                src={resolveImageUrl(auction.images?.[0])}
                alt={auction.title || "Auction product"}
                className={styles.image}
            />

            <div className={styles.content}>
                <span className={styles.category}>
                    {/* CHANGED: Use auction.category */}
                    {auction.category || "General"}
                </span>

                <h3>
                    {/* CHANGED: Use auction.title */}
                    {auction.title || "Untitled Product"}
                </h3>

                <div className={styles.info}>
                    <div>
                        <small>Current Bid</small>
                        <strong>
                            {formatCurrency(auction.currentBid || auction.startingPrice)}
                        </strong>
                    </div>

                    <div>
                        <small>Bids</small>
                        <strong>{auction.totalBids || 0}</strong>
                    </div>
                </div>

                <div className={styles.footer}>
                    <span>⏳ {timeLeft}</span>
                    <button
                        className={styles.button}
                        onClick={() => onView(auction)}
                    >
                        View Auction
                    </button>
                </div>
            </div>
        </div>
    );
}