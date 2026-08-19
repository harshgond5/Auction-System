import styles from "./RecentBuyers.module.css";
import { recentBuyers } from "../../../data/dummyData";

export default function RecentBuyers() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Top Buyers</h2>
          <p>Most active buyers this month</p>
        </div>
      </div>

      <div className={styles.list}>
        {recentBuyers.map((buyer) => (
          <div
            key={buyer.id}
            className={styles.item}
          >
            <img
              src={buyer.avatar}
              alt={buyer.name}
            />

            <div className={styles.info}>
              <h3>{buyer.name}</h3>
              <span>{buyer.city}</span>
            </div>

            <div className={styles.stats}>
              <strong>{buyer.purchases}</strong>
              <small>Purchases</small>
            </div>

            <div className={styles.amount}>
              <strong>{buyer.spent}</strong>
              <small>Spent</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}