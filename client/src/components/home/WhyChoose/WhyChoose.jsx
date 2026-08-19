import {
  FaShieldAlt,
  FaRobot,
  FaBolt,
  FaUsers,
  FaWallet,
  FaHeadset,
} from "react-icons/fa";

import { motion } from "framer-motion";

import styles from "./WhyChoose.module.css";

const features = [
  {
    title: "Secure Transactions",
    desc: "Every auction is protected with encrypted payment and secure bidding.",
    icon: <FaShieldAlt />,
    color: "#2563eb",
  },
  {
    title: "AI Price Prediction",
    desc: "Know the estimated market value before placing your next bid.",
    icon: <FaRobot />,
    color: "#8b5cf6",
  },
  {
    title: "Lightning Fast Bidding",
    desc: "Real-time bidding engine with instant updates and notifications.",
    icon: <FaBolt />,
    color: "#f59e0b",
  },
  {
    title: "Verified Sellers",
    desc: "Every seller is verified to ensure authentic listings.",
    icon: <FaUsers />,
    color: "#10b981",
  },
  {
    title: "Secure Payments",
    desc: "Protected payment gateway with buyer safety.",
    icon: <FaWallet />,
    color: "#ef4444",
  },
  {
    title: "24/7 Support",
    desc: "Dedicated support whenever you need assistance.",
    icon: <FaHeadset />,
    color: "#06b6d4",
  },
];

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span>Why AuctionHub?</span>

          <h2>Everything You Need to Bid With Confidence</h2>

          <p>
            We combine AI, security, and real-time technology to create the
            safest online auction experience.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div
                className={styles.icon}
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}