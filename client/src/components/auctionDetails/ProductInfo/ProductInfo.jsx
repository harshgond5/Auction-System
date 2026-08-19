import { useEffect, useState } from "react";
import styles from "./ProductInfo.module.css";
import { formatCurrency, formatTimeLeft } from "../../../utils/format";

export default function ProductInfo({ auction }) {

  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(auction.endTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatTimeLeft(auction.endTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [auction.endTime]);

  return (
    <div className={styles.container}>

      <span className={styles.category}>
        {auction.category}
      </span>

      <h1>{auction.title}</h1>

      <p className={styles.description}>
        {auction.description}
      </p>

      <div className={styles.stats}>

        <div>
          <small>Current Bid</small>
          <strong>{formatCurrency(auction.currentBid)}</strong>
        </div>

        <div>
          <small>Total Bids</small>
          <strong>{auction.bidCount || 0}</strong>
        </div>

        <div>
          <small>{auction.status === "ended" ? "Status" : "Time Left"}</small>
          <strong>
            {auction.status === "ended" ? "Ended" : timeLeft}
          </strong>
        </div>

      </div>

      {auction.status === "ended" && auction.winner && (
        <p className={styles.description}>
          🏆 Won by <strong>{auction.winner.name}</strong> for{" "}
          {formatCurrency(auction.winningBid)}
        </p>
      )}

    </div>
  );
}
