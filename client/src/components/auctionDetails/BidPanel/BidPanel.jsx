import styles from "./BidPanel.module.css";

export default function BidPanel() {
  return (
    <div className={styles.card}>

      <h2>Place Your Bid</h2>

      <input
        type="number"
        placeholder="Enter your bid amount"
      />

      <button>
        Place Bid
      </button>

      <p>
        Minimum increment:
        <strong> ₹1,000</strong>
      </p>

    </div>
  );
}