import styles from "./RecentAuctions.module.css";
import { sellerAuctions } from "../../../data/dummyData";

export default function RecentAuctions() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>My Auctions</h2>
          <p>Manage all your auction listings</p>
        </div>

        <button>View All</button>
      </div>

      <div className={styles.list}>
        {sellerAuctions.map((auction) => (
          <div
            key={auction.id}
            className={styles.item}
          >
            <img
              src={auction.image}
              alt={auction.title}
            />

            <div className={styles.info}>
              <h3>{auction.title}</h3>
              <span>{auction.category}</span>
            </div>

            <div className={styles.price}>
              <small>Current Bid</small>
              <strong>{auction.bid}</strong>
            </div>

            <div className={styles.bidder}>
              <small>Highest Bidder</small>
              <strong>{auction.bidder}</strong>
            </div>

            <div className={styles.time}>
              <small>Ends In</small>
              <strong>{auction.time}</strong>
            </div>

            <div className={styles.status}>
              <span className={styles[auction.status.toLowerCase()]}>
                {auction.status}
              </span>
            </div>

            <div className={styles.actions}>
              <button>Edit</button>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}