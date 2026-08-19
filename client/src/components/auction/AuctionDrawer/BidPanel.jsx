import { useState } from "react";

import styles from "./AuctionDrawer.module.css";

import {
    FaBolt,
    FaHistory,
    FaMinus,
    FaPlus,
    FaLock
} from "react-icons/fa";

import { Trophy } from "lucide-react";

import { placeBid } from "../../../services/bidService";

export default function BidPanel({
    auction,
    onPlaceBid,
    onHistory
}) {
    const currentBid =
        Number(auction.currentBid) ||
        Number(auction.startingPrice) ||
        0;

    const increment =
        Number(auction.minimumBidIncrement) ||
        Number(auction.minIncrement) ||
        500;


    const minimumNextBid =
        currentBid + increment;


    const [bidAmount, setBidAmount] =
        useState(minimumNextBid);


    const [loading, setLoading] =
        useState(false);


    const [message, setMessage] =
        useState("");

    const [error, setError] =
        useState("");

    function decreaseBid() {

        setBidAmount((previous) => {

            const newAmount =
                Number(previous) - increment;

            return Math.max(
                minimumNextBid,
                newAmount
            );

        });

    }

    function increaseBid() {

        setBidAmount((previous) =>
            Number(previous) + increment
        );

    }


    /*
     * PLACE BID
     */
    async function handlePlaceBid() {

        setMessage("");
        setError("");


        const amount =
            Number(bidAmount);


        /*
         * Validate bid
         */
        if (!Number.isFinite(amount)) {

            setError(
                "Please enter a valid bid amount."
            );

            return;

        }


        /*
         * Minimum bid validation
         */
        if (amount < minimumNextBid) {

            setError(
                `Bid must be at least ₹${minimumNextBid.toLocaleString("en-IN")}`
            );

            setBidAmount(minimumNextBid);

            return;

        }


        try {

            setLoading(true);

            console.log("🔵 DRAWER AUCTION:", auction);
            console.log("🔵 DRAWER AUCTION ID:", auction?._id);
            const result =
                await placeBid(
                    auction._id,
                    amount
                );


            console.log(
                "PLACE BID RESPONSE:",
                result
            );


            if (!result?.success) {

                throw new Error(
                    result?.message ||
                    "Failed to place bid"
                );

            }


            /*
             * SUCCESS
             */
            setMessage(
                "Bid placed successfully!"
            );


            /*
             * Get latest bid from response
             */
            const latestBid =
                Number(
                    result?.auction?.currentBid
                ) || amount;


            /*
             * Set next possible bid
             */
            setBidAmount(
                latestBid + increment
            );


            /*
             * Notify parent
             *
             * This allows AuctionDrawer/Hero
             * to refresh its auction data.
             */
            if (onPlaceBid) {

                onPlaceBid(result);

            }


        } catch (error) {

            console.error(
                "PLACE BID ERROR:",
                error
            );


            setError(
                error?.response?.data?.message ||
                error?.message ||
                "Failed to place bid"
            );


        } finally {

            setLoading(false);

        }

    }


    return (

        <div className={styles.bidPanel}>

            {/* TOP */}

            <div className={styles.bidTop}>

                <div>

                    <span className={styles.bidLabel}>

                        <Trophy size={16} />

                        Current Bid

                    </span>


                    <h2>

                        ₹
                        {currentBid.toLocaleString("en-IN")}

                    </h2>

                </div>


                <button
                    type="button"
                    className={styles.historyButton}
                    onClick={onHistory}
                >

                    <FaHistory />

                    Bid History

                </button>

            </div>


            {/* BID SELECTOR */}

            <div className={styles.bidSelector}>

                <button
                    type="button"
                    className={styles.qtyButton}
                    onClick={decreaseBid}
                    disabled={
                        loading ||
                        Number(bidAmount) <= minimumNextBid
                    }
                >

                    <FaMinus />

                </button>


                <div className={styles.bidAmount}>

                    ₹
                    {Number(bidAmount).toLocaleString("en-IN")}

                </div>


                <button
                    type="button"
                    className={styles.qtyButton}
                    onClick={increaseBid}
                    disabled={loading}
                >

                    <FaPlus />

                </button>

            </div>


            {/* FOOTER */}

            <div className={styles.bidFooter}>

                <span>

                    Next Bid

                    <strong>

                        ₹
                        {Number(bidAmount).toLocaleString("en-IN")}

                    </strong>

                </span>


                <button
                    type="button"
                    className={styles.placeBidButton}
                    onClick={handlePlaceBid}
                    disabled={loading}
                >

                    <FaBolt />

                    {loading
                        ? "Placing Bid..."
                        : `Place Bid • ₹${Number(
                            bidAmount
                        ).toLocaleString("en-IN")}`
                    }

                </button>


                <span>

                    <FaLock />

                    Secure Auction

                </span>

            </div>


            {/* ERROR */}

            {error && (

                <div className={styles.error}>

                    {error}

                </div>

            )}


            {/* SUCCESS */}

            {message && (

                <div className={styles.success}>

                    {message}

                </div>

            )}

        </div>

    );

}