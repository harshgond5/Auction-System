import { useCallback, useEffect, useState } from "react";
import styles from "./BidHistory.module.css";
import { getBids } from "../../services/bidService";

const getRelativeTime = (date) => {
  if (!date) return "";

  const now = new Date();
  const created = new Date(date);

  const diffInSeconds = Math.floor(
    (now - created) / 1000
  );

  if (diffInSeconds < 10) {
    return "Just now";
  }

  if (diffInSeconds < 60) {
    return `${diffInSeconds} sec ago`;
  }

  const diffInMinutes = Math.floor(
    diffInSeconds / 60
  );

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  }

  const diffInHours = Math.floor(
    diffInMinutes / 60
  );

  if (diffInHours < 24) {
    return `${diffInHours} hr ago`;
  }

  const diffInDays = Math.floor(
    diffInHours / 24
  );

  if (diffInDays < 7) {
    return `${diffInDays} day${
      diffInDays !== 1 ? "s" : ""
    } ago`;
  }

  return created.toLocaleDateString("en-IN");
};

export default function BidHistory({
  auctionId,
  refreshTrigger = 0,
}) {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBidHistory = useCallback(async () => {
    if (!auctionId) return;

    try {
      setLoading(true);
      setError("");

      const data = await getBids(auctionId);

      const sortedBids = [...data].sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );

      setBids(sortedBids);

    } catch (error) {
      console.error(
        "Failed to fetch bid history:",
        error
      );

      setError(
        error.response?.data?.message ||
        "Failed to load bid history"
      );

    } finally {
      setLoading(false);
    }
  }, [auctionId]);

  useEffect(() => {
    fetchBidHistory();
  }, [fetchBidHistory, refreshTrigger]);

  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <h2>Bid History</h2>

        <span className={styles.bidCount}>
          {bids.length} bid
          {bids.length !== 1 ? "s" : ""}
        </span>
      </div>

      {loading && (
        <p className={styles.message}>
          Loading bid history...
        </p>
      )}

      {!loading && error && (
        <p className={styles.error}>
          {error}
        </p>
      )}

      {!loading &&
        !error &&
        bids.length === 0 && (
          <p className={styles.message}>
            No bids yet. Be the first to bid!
          </p>
        )}

      {!loading &&
        !error &&
        bids.map((bid) => (
          <div
            key={bid._id}
            className={styles.row}
          >

            <div className={styles.bidderInfo}>

              <span className={styles.bidderName}>
                {bid.bidder?.name || "Bidder"}
              </span>

              <small className={styles.time}>
                {getRelativeTime(bid.createdAt)}
              </small>

            </div>

            <strong className={styles.amount}>
              ₹{Number(bid.amount).toLocaleString("en-IN")}
            </strong>

          </div>
        ))}
    </div>
  );
}