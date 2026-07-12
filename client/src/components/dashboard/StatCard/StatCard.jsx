import styles from "./StatCard.module.css";

export default function StatCard({ title, value, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <div>
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}