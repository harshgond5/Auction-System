import styles from "./RecentBids.module.css";
import { recentBids } from "../../../data/dummyData";

export default function RecentBids() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Recent Bids</h2>
          <p>Latest activity on your auctions</p>
        </div>

        <button>View All</button>
      </div>

      <div className={styles.list}>
        {recentBids.map((bid) => (
          <div
            key={bid.id}
            className={styles.item}
          >
            <img
              src={bid.avatar}
              alt={bid.name}
            />

            <div className={styles.info}>
              <h3>{bid.name}</h3>
              <span>{bid.product}</span>
            </div>

            <div className={styles.amount}>
              <strong>{bid.amount}</strong>
              <small>{bid.time}</small>
            </div>

            <span
              className={`${styles.badge} ${
                styles[bid.status.toLowerCase()]
              }`}
            >
              {bid.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}