import styles from "./SecurityPayments.module.css";

export default function SecurityPayments() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Security & Payments</h2>
          <p>Manage account security and payment preferences.</p>
        </div>
      </div>

      {/* SECURITY */}

      <div className={styles.section}>
        <h3>🔒 Security</h3>

        <div className={styles.row}>
          <div>
            <h4>Password</h4>
            <span>Last changed 20 days ago</span>
          </div>

          <button>Change</button>
        </div>

        <div className={styles.row}>
          <div>
            <h4>Two-Factor Authentication</h4>
            <span>Disabled</span>
          </div>

          <button>Enable</button>
        </div>

        <div className={styles.row}>
          <div>
            <h4>Email Verification</h4>
            <span className={styles.success}>Verified</span>
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <h4>Phone Verification</h4>
            <span className={styles.pending}>Pending</span>
          </div>

          <button>Verify</button>
        </div>
      </div>

      {/* PAYMENT */}

      <div className={styles.section}>
        <h3>💳 Payment Settings</h3>

        <div className={styles.row}>
          <div>
            <h4>Preferred Method</h4>
            <span>UPI</span>
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <h4>UPI ID</h4>
            <span>harsh@oksbi</span>
          </div>

          <button>Edit</button>
        </div>

        <div className={styles.row}>
          <div>
            <h4>Auto Withdraw</h4>
            <span className={styles.success}>Enabled</span>
          </div>
        </div>

        <div className={styles.row}>
          <div>
            <h4>Payout Schedule</h4>
            <span>Daily</span>
          </div>
        </div>
      </div>

      {/* WALLET */}

      <div className={styles.wallet}>
        <h3>💰 Seller Wallet</h3>

        <div className={styles.walletGrid}>

          <div className={styles.walletCard}>
            <small>Available</small>
            <h2>₹24,520</h2>
          </div>

          <div className={styles.walletCard}>
            <small>Pending</small>
            <h2>₹8,600</h2>
          </div>

          <div className={styles.walletCard}>
            <small>Escrow</small>
            <h2>₹12,400</h2>
          </div>

        </div>

        <button className={styles.withdraw}>
          Withdraw Funds
        </button>
      </div>
    </div>
  );
}