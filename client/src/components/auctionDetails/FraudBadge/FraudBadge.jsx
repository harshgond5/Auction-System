import styles from "./FraudBadge.module.css";

export default function FraudBadge() {
  return (
    <div className={styles.card}>

      <h3>AI Fraud Analysis</h3>

      <div className={styles.safe}>
        LOW RISK
      </div>

      <ul>
        <li>✔ Verified Seller</li>
        <li>✔ Normal Bid Pattern</li>
        <li>✔ Trusted Device</li>
      </ul>

      <p>
        AI Confidence: <strong>96%</strong>
      </p>

    </div>
  );
}