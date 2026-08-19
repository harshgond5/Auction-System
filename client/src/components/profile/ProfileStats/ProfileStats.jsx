import {
  FaGavel,
  FaHammer,
  FaTrophy,
  FaStar,
} from "react-icons/fa";

import styles from "./ProfileStats.module.css";

export default function ProfileStats({ user }) {

  if (!user) return null;

  const stats = [
    {
      icon: <FaGavel />,
      value: user.activeListings || 0,
      label: "Active Listings",
    },
    {
      icon: <FaHammer />,
      value: user.activeBids || 0,
      label: "Active Bids",
    },
    {
      icon: <FaTrophy />,
      value: user.wonAuctions || 0,
      label: "Won Auctions",
    },
    {
      icon: <FaStar />,
      value: user.rating || "5.0",
      label: "Rating",
    },
  ];

  return (

    <div className={styles.card}>

      <div className={styles.header}>
        <h3>Profile Statistics</h3>
      </div>

      <div className={styles.grid}>

        {stats.map((item, index) => (

          <div
            key={index}
            className={styles.stat}
          >

            <div className={styles.icon}>
              {item.icon}
            </div>

            <h2>{item.value}</h2>

            <p>{item.label}</p>

          </div>

        ))}

      </div>

    </div>

  );

}