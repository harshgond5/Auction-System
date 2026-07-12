import styles from "./ProductInfo.module.css";

export default function ProductInfo() {
  return (
    <div className={styles.container}>

      <span className={styles.category}>
        Electronics
      </span>

      <h1>Apple MacBook Pro M3 Max</h1>

      <p className={styles.description}>
        Powerful laptop with Apple M3 Max chip, 36GB RAM,
        1TB SSD and excellent battery life. Perfect for
        developers, designers and video editors.
      </p>

      <div className={styles.stats}>

        <div>
          <small>Current Bid</small>
          <strong>₹1,25,000</strong>
        </div>

        <div>
          <small>Total Bids</small>
          <strong>28</strong>
        </div>

        <div>
          <small>Time Left</small>
          <strong>02h 18m</strong>
        </div>

      </div>

    </div>
  );
}