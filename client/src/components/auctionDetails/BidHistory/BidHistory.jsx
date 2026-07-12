import { bidHistory } from "../../../data/dummyData";
import styles from "./BidHistory.module.css";

export default function BidHistory() {
  return (
    <div className={styles.card}>
      <h2>Bid History</h2>

      {bidHistory.map((bid) => (
        <div
          key={bid.id}
          className={styles.row}
        >
          <span>{bid.bidder}</span>

          <strong>{bid.amount}</strong>

          <small>{bid.time}</small>
        </div>
      ))}
    </div>
  );
}