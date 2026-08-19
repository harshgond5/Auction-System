import { useState } from "react";
import styles from "./BidPanel.module.css";
import { useAuth } from "../../../context/AuthContext";
import { placeBid } from "../../../services/bidService";
import { formatCurrency } from "../../../utils/format";

export default function BidPanel({ auction, onBidPlaced }) {
  const { firebaseUser, profile } = useAuth();

  // Current bid
  const currentBid = Number(auction.currentBid) || 0;

  // Support both possible field names
  const minIncrement =
    Number(auction.minimumBidIncrement) ||
    Number(auction.minIncrement) ||
    50;

  // Starting price
  const startingPrice =
    Number(auction.startingPrice) || 0;

  // Calculate minimum valid bid
  const minimumNextBid =
    currentBid > 0
      ? currentBid + minIncrement
      : startingPrice;

  const [amount, setAmount] = useState(minimumNextBid);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isEnded =
    auction.status?.toLowerCase() !== "live" ||
    new Date(auction.endTime) <= new Date();

  const isOwnAuction =
    profile &&
    auction.seller &&
    profile._id === auction.seller._id;

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!firebaseUser) {
      setError("Please log in to continue.");
      return;
    }

    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError("Enter a valid bid amount.");
      return;
    }

    if (numericAmount < minimumNextBid) {
      setError(
        `Bid must be at least ${formatCurrency(minimumNextBid)}`
      );
      return;
    }

    setSubmitting(true);

    try {
      const response = await placeBid(
        auction._id,
        numericAmount
      );

      if (response.success) {
        setSuccess("Bid placed successfully!");

        // Update input to next possible bid
        setAmount(
          numericAmount + minIncrement
        );

        // Tell parent to refresh auction/bids
        onBidPlaced?.();

      } else {
        setError(
          response.message ||
          "Unable to place bid."
        );
      }

    } catch (err) {
      console.error("PLACE BID ERROR:", err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Unable to place bid."
      );

    } finally {
      setSubmitting(false);
    }
  }

  // Auction ended
  if (isEnded) {
    return (
      <div className={styles.card}>
        <h2>Bidding Closed</h2>

        <p>
          This auction has ended.

          {auction.winner && (
            <>
              {" "}
              Winner:{" "}
              <strong>
                {auction.winner.name}
              </strong>{" "}
              at{" "}
              {formatCurrency(
                auction.winningBid
              )}
            </>
          )}
        </p>
      </div>
    );
  }

  // Not logged in
  if (!firebaseUser) {
    return (
      <div className={styles.card}>
        <h2>Place Your Bid</h2>

        <p>
          Please log in to place a bid.
        </p>
      </div>
    );
  }

  // Seller cannot bid
  if (isOwnAuction) {
    return (
      <div className={styles.card}>
        <h2>Place Your Bid</h2>

        <p>
          You cannot bid on your own auction.
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.card}
      onSubmit={handleSubmit}
    >
      <h2>Place Your Bid</h2>

      <input
        type="number"
        placeholder="Enter your bid amount"
        value={amount}
        min={minimumNextBid}
        step={minIncrement}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        disabled={submitting}
      />

      <button
        type="submit"
        disabled={submitting}
      >
        {submitting
          ? "Placing Bid..."
          : "Place Bid"}
      </button>

      <p>
        Minimum next bid:
        <strong>
          {" "}
          {formatCurrency(minimumNextBid)}
        </strong>
      </p>

      {error && (
        <p style={{ color: "#dc2626" }}>
          {error}
        </p>
      )}

      {success && (
        <p style={{ color: "#16a34a" }}>
          {success}
        </p>
      )}
    </form>
  );
}next