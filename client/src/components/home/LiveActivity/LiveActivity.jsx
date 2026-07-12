import { motion } from "framer-motion";
import {
  FaGavel,
  FaUserCircle,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";

import styles from "./LiveActivity.module.css";

const activities = [
  {
    user: "Rahul Sharma",
    item: "MacBook Air M2",
    amount: "₹84,500",
    status: "Highest Bid",
    icon: <FaArrowUp />,
    color: "#10b981",
  },
  {
    user: "Priya Singh",
    item: "iPhone 15 Pro",
    amount: "₹1,08,000",
    status: "New Bid",
    icon: <FaGavel />,
    color: "#2563eb",
  },
  {
    user: "Arjun Patel",
    item: "Canon EOS R50",
    amount: "₹54,000",
    status: "Auction Won",
    icon: <FaCheckCircle />,
    color: "#f59e0b",
  },
  {
    user: "Sneha Gupta",
    item: "Gaming Chair",
    amount: "₹18,000",
    status: "Highest Bid",
    icon: <FaArrowUp />,
    color: "#8b5cf6",
  },
];

export default function LiveActivity() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <span>● Live Updates</span>

          <h2>Real-Time Auction Activity</h2>

          <p>
            Watch bids happening live across thousands of auctions.
          </p>
        </div>

        <div className={styles.feed}>
          {activities.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.avatar}>
                <FaUserCircle />
              </div>

              <div className={styles.info}>
                <h4>{item.user}</h4>

                <p>
                  placed a bid on <strong>{item.item}</strong>
                </p>
              </div>

              <div className={styles.amount}>
                <strong>{item.amount}</strong>

                <span
                  style={{
                    background: item.color,
                  }}
                >
                  {item.icon}
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}