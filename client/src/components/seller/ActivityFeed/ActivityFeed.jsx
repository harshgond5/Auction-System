import styles from "./ActivityFeed.module.css";
import { activityFeed } from "../../../data/dummyData";

export default function ActivityFeed() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h2>Recent Activity</h2>
          <p>Latest events on your account</p>
        </div>
      </div>

      <div className={styles.timeline}>
        {activityFeed.map((activity) => (
          <div
            key={activity.id}
            className={styles.item}
          >
            <div className={styles.icon}>
              {activity.icon}
            </div>

            <div className={styles.content}>
              <h4>{activity.title}</h4>

              <p>{activity.description}</p>

              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}