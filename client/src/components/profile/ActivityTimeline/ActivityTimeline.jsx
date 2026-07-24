import {
  FaGavel,
  FaHeart,
  FaCheckCircle,
  FaUserEdit,
  FaSignInAlt,
} from "react-icons/fa";

import styles from "./ActivityTimeline.module.css";

export default function ActivityTimeline() {

  const activities = [

    {
      icon: <FaSignInAlt />,
      title: "Logged In",
      time: "Today • 09:15 AM",
      color: "#2563eb",
    },

    {
      icon: <FaHeart />,
      title: "Added Vintage Rolex to Watchlist",
      time: "Yesterday • 07:40 PM",
      color: "#ef4444",
    },

    {
      icon: <FaGavel />,
      title: "Placed a bid on MacBook Pro M3",
      time: "2 days ago",
      color: "#f59e0b",
    },

    {
      icon: <FaCheckCircle />,
      title: "Identity Verification Completed",
      time: "Last Week",
      color: "#16a34a",
    },

    {
      icon: <FaUserEdit />,
      title: "Profile Updated",
      time: "Last Month",
      color: "#8b5cf6",
    },

  ];

  return (

    <div className={styles.card}>

      <div className={styles.header}>

        <h2>Recent Activity</h2>

        <p>Your latest account activity.</p>

      </div>

      <div className={styles.timeline}>

        {

          activities.map((activity, index) => (

            <div
              key={index}
              className={styles.item}
            >

              <div
                className={styles.icon}
                style={{
                  background: activity.color,
                }}
              >

                {activity.icon}

              </div>

              <div className={styles.content}>

                <h4>

                  {activity.title}

                </h4>

                <span>

                  {activity.time}

                </span>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}