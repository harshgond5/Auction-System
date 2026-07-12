import styles from "./FraudAlerts.module.css";

export default function FraudAlerts({ alerts }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>🤖 AI Fraud Alerts</h2>
        <span>{alerts.length} Alerts</span>
      </div>

      <div className={styles.list}>
        {alerts.map((alert) => (
          <div key={alert.id} className={styles.item}>
            <div>
              <h4>{alert.bidder}</h4>

              <p>{alert.auction}</p>

              <small>{alert.reason}</small>
            </div>

            <div className={styles.right}>
              <span
                className={`${styles.badge} ${
                  styles[alert.risk.toLowerCase()]
                }`}
              >
                {alert.risk}
              </span>

              <small>{alert.confidence}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}