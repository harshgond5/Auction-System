import {
  FaGavel,
  FaHammer,
  FaTrophy,
  FaStar,
} from "react-icons/fa";

import styles from "./ProfileStats.module.css";

export default function ProfileStats() {
  const stats = [
    {
      icon: <FaGavel />,
      value: 12,
      label: "Active Listings",
    },
    {
      icon: <FaHammer />,
      value: 18,
      label: "Active Bids",
    },
    {
      icon: <FaTrophy />,
      value: 7,
      label: "Won Auctions",
    },
    {
      icon: <FaStar />,
      value: "4.9",
      label: "Seller Rating",
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

// const stats = [
//   {
//     icon: <FaGavel />,
//     value: userStats.activeListings,
//     label: "Active Listings",
//   },
//   {
//     icon: <FaHammer />,
//     value: userStats.activeBids,
//     label: "Active Bids",
//   },
//   {
//     icon: <FaTrophy />,
//     value: userStats.wonAuctions,
//     label: "Won Auctions",
//   },
//   {
//     icon: <FaStar />,
//     value: userStats.rating,
//     label: "Seller Rating",
//   },
// ];