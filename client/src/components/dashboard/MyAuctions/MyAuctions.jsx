import styles from "./MyAuctions.module.css";

export default function MyAuctions({ auctions }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>My Auctions</h2>
      </div>

      <div className={styles.list}>
        {auctions.map((auction) => (
          <div key={auction.id} className={styles.row}>
            <div>
              <h4>{auction.title}</h4>

              <span>
                {auction.bids} Bids • {auction.currentBid}
              </span>
            </div>

            <span
              className={`${styles.badge} ${
                styles[(auction.status || "").toLowerCase().replace(" ", "")]
              }`}
            >
              {auction.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}