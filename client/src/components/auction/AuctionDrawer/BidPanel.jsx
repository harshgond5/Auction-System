import styles from "./AuctionDrawer.module.css";
import { FaBolt, FaHistory, FaMinus, FaPlus, FaLock } from "react-icons/fa";
import { Trophy } from "lucide-react";

export default function BidPanel({
    auction
}) {

    const currentBid = auction.currentBid || 92000;
    const increment = auction.bidIncrement || 500;

    const nextBid = currentBid + increment;

    return (

        <div className={styles.bidPanel}>

            <div className={styles.bidTop}>

                <div>

                    <span className={styles.bidLabel}>
                        <Trophy size={16} />
                          Current Bid
                    </span>

                    <h2>
                        ₹{currentBid.toLocaleString()}
                    </h2>

                </div>

                <button className={styles.historyButton}>

                    <FaHistory />

                    Bid History

                </button>

            </div>

            <div className={styles.bidSelector}>

                <button className={styles.qtyButton}>

                    <FaMinus />

                </button>

                <div className={styles.bidAmount}>

                    ₹{nextBid.toLocaleString()}

                </div>

                <button className={styles.qtyButton}>

                    <FaPlus />

                </button>

            </div>

            <div className={styles.bidFooter}>

                <span>

                    Next Bid

                    <strong>

                        ₹{nextBid.toLocaleString()}

                    </strong>

                </span>
                <span>
                    <button className={styles.placeBidButton}>

                <FaBolt />

                Place Bid • ₹{nextBid.toLocaleString()}

            </button>
                </span>

                <span>

                    <FaLock />

                    Secure Auction

                </span>

            </div>

        </div>

    );

}