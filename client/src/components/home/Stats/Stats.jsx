import { CountUp } from "react-countup";

import { motion } from "framer-motion";

import {
  FaUsers,
  FaGavel,
  FaRupeeSign,
  FaTrophy,
} from "react-icons/fa";

import styles from "./Stats.module.css";

const stats = [
  {
    icon: <FaUsers />,
    value: 12000,
    suffix: "+",
    title: "Registered Users",
    color: "#2563eb",
  },
  {
    icon: <FaGavel />,
    value: 850,
    suffix: "+",
    title: "Live Auctions",
    color: "#10b981",
  },
  {
    icon: <FaRupeeSign />,
    value: 2.4,
    suffix: "Cr",
    title: "Trading Volume",
    color: "#f59e0b",
    decimal: 1,
  },
  {
    icon: <FaTrophy />,
    value: 98,
    suffix: "%",
    title: "Successful Auctions",
    color: "#8b5cf6",
  },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span>Trusted Worldwide</span>

          <h2>Numbers That Speak For Themselves</h2>

          <p>
            Thousands of users trust AuctionHub every day to buy and sell
            products through secure live auctions.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div
                className={styles.icon}
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              <h3>
                {item.value}
                {item.suffix}
              </h3>

              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}