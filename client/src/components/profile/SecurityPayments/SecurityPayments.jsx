import {
  FaShieldAlt,
  FaUniversity,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

import styles from "./SecurityPayments.module.css";

export default function SecurityPayments({ user }) {

  if (!user) return null;

  return (

    <div className={styles.card}>

      <div className={styles.header}>

        <div>
          <h2>Security & Payments</h2>
          <p>Account security and payment information.</p>
        </div>

      </div>

      <div className={styles.grid}>

        <div className={styles.item}>
          <FaShieldAlt className={styles.icon} />
          <div>
            <span>Two-Factor Authentication</span>
            <strong>{user.twoFactor ? "Enabled" : "Disabled"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaWallet className={styles.icon} />
          <div>
            <span>Wallet Balance</span>
            <strong>₹ {user.wallet || 0}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaUniversity className={styles.icon} />
          <div>
            <span>Bank Account</span>
            <strong>{user.bankLinked ? "Linked" : "Not Linked"}</strong>
          </div>
        </div>

        <div className={styles.item}>
          <FaCheckCircle className={styles.icon} />
          <div>
            <span>Primary Payment Method</span>
            <strong>{user.paymentMethod || "UPI"}</strong>
          </div>
        </div>

      </div>

    </div>

  );

}