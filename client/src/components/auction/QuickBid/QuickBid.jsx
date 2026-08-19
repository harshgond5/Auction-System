import { useState } from "react";

import DrawerHeader from "../AuctionDrawer/DrawerHeader";
import { placeBid } from "../../../services/bidService";

import styles from "./QuickBid.module.css";

export default function QuickBid({ auction, close, onBidPlaced }) {
  const currentBid =
    auction?.currentBid || auction?.startingPrice || 0;

  const increment =
    auction?.minimumBidIncrement ||
    auction?.bidIncrement ||
    500;

  const [bidAmount, setBidAmount] = useState(
    currentBid + increment
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const increaseBid = (amount) => {
    setBidAmount((prev) => prev + amount);
    setError("");
  };

  const handleBidChange = (e) => {
    setBidAmount(Number(e.target.value));
    setError("");
  };

  const handlePlaceBid = async () => {
    if (!auction?._id) {
      setError("Auction information is missing.");
      return;
    }

    if (bidAmount <= currentBid) {
      setError(
        `Your bid must be higher than ₹${currentBid.toLocaleString()}`
      );
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await placeBid(
        auction._id,
        bidAmount
      );

      console.log("BID SUCCESS:", response);

      setSuccess("Bid placed successfully!");

      if (onBidPlaced) {
        onBidPlaced(response);
      }

      setTimeout(() => {
        close();
      }, 1000);

    } catch (err) {
      console.error("PLACE BID ERROR:", err);

      setError(
        err?.message ||
        "Failed to place bid. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DrawerHeader
        title="Quick Bid"
        subtitle="Place your bid instantly"
        onClose={close}
      />

      <div className={styles.body}>

        <div className={styles.priceCard}>
          <span>Current Bid</span>

          <h1>
            ₹{currentBid.toLocaleString()}
          </h1>
        </div>

        <label>Your Bid</label>

        <input
          type="number"
          value={bidAmount}
          min={currentBid + increment}
          onChange={handleBidChange}
          disabled={loading}
        />

        <div className={styles.buttons}>

          <button
            type="button"
            onClick={() => increaseBid(500)}
            disabled={loading}
          >
            +₹500
          </button>

          <button
            type="button"
            onClick={() => increaseBid(1000)}
            disabled={loading}
          >
            +₹1000
          </button>

          <button
            type="button"
            onClick={() => increaseBid(2000)}
            disabled={loading}
          >
            +₹2000
          </button>

        </div>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        {success && (
          <p style={{ color: "green" }}>
            {success}
          </p>
        )}

        <div className={styles.summary}>

          <div>
            <span>Current</span>

            <strong>
              ₹{currentBid.toLocaleString()}
            </strong>
          </div>

          <div>
            <span>Your Bid</span>

            <strong>
              ₹{bidAmount.toLocaleString()}
            </strong>
          </div>

        </div>

      </div>

      <div className={styles.footer}>

        <button
          onClick={handlePlaceBid}
          disabled={loading}
        >
          {loading ? "Placing Bid..." : "Place Bid"}
        </button>

      </div>
    </>
  );
}