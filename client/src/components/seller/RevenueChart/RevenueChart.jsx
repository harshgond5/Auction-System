import styles from "./RevenueChart.module.css";
import { revenueData } from "../../../data/dummyData";

export default function RevenueChart() {
  const max = Math.max(...revenueData.map((item) => item.value));

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Revenue Analytics</h2>
          <p>Monthly revenue performance</p>
        </div>

        <div className={styles.total}>
          <span>Total Revenue</span>
          <h3>₹12,45,000</h3>
        </div>
      </div>

      <div className={styles.chart}>
        {revenueData.map((item) => (
          <div
            key={item.month}
            className={styles.barGroup}
          >
            <div className={styles.barWrapper}>
              <div
                className={styles.bar}
                style={{
                  height: `${(item.value / max) * 220}px`,
                }}
              />
            </div>

            <span>{item.month}</span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div>
          <strong>↑ 18%</strong>
          <p>Growth this month</p>
        </div>

        <div>
          <strong>146</strong>
          <p>Items Sold</p>
        </div>

        <div>
          <strong>18</strong>
          <p>Active Auctions</p>
        </div>
      </div>
    </div>
  );
}