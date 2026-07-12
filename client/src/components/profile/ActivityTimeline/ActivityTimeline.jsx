import styles from "./ActivityTimeline.module.css";

const activities = [
  {
    id: 1,
    icon: "👤",
    title: "Profile Updated",
    description: "You updated your personal information.",
    time: "5 mins ago",
    type: "profile",
  },
  {
    id: 2,
    icon: "🛡",
    title: "KYC Approved",
    description: "Your Aadhaar verification was approved.",
    time: "Yesterday",
    type: "kyc",
  },
  {
    id: 3,
    icon: "🔨",
    title: "Auction Created",
    description: "Vintage Camera auction is now live.",
    time: "2 days ago",
    type: "auction",
  },
  {
    id: 4,
    icon: "🏆",
    title: "Auction Won",
    description: "You won MacBook Pro 2023 auction.",
    time: "4 days ago",
    type: "bid",
  },
  {
    id: 5,
    icon: "💰",
    title: "Withdrawal Completed",
    description: "₹8,600 transferred successfully.",
    time: "1 week ago",
    type: "payment",
  },
];

export default function ActivityTimeline() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>Recent Activity</h2>

        <button>View All</button>
      </div>

      <div className={styles.timeline}>
        {activities.map((activity) => (
          <div key={activity.id} className={styles.item}>
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