import styles from "./DashboardStats.module.css";
import { dashboardStats } from "../../../data/dummyData";

export default function DashboardStats() {
  return (
    <div className={styles.grid}>
      {dashboardStats.map((item) => (
        <div
          key={item.title}
          className={styles.card}
        >
          <div className={styles.icon}>
            {item.icon}
          </div>

          <div className={styles.content}>
            <p>{item.title}</p>

            <h2>{item.value}</h2>

            <span
              className={
                item.trend === "up"
                  ? styles.up
                  : styles.down
              }
            >
              {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}