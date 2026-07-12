import styles from "./RecentBids.module.css";

export default function RecentBids({ bids }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>Recent Bids</h2>
      </div>

      <div className={styles.table}>
        {bids.map((bid) => (
          <div key={bid.id} className={styles.row}>
            <div>
              <h4>{bid.product}</h4>
              <span>{bid.time}</span>
            </div>

            <div className={styles.right}>
              <strong>{bid.amount}</strong>

              <span
                className={`${styles.status} ${
                  styles[bid.status.toLowerCase()]
                }`}
              >
                {bid.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}