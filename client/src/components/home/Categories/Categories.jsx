import {
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaCar,
  FaCouch,
  FaGem,
  FaTshirt,
  FaGamepad,
} from "react-icons/fa";

import { motion } from "framer-motion";

import styles from "./Categories.module.css";

const categories = [
  {
    title: "Mobiles",
    icon: <FaMobileAlt />,
    auctions: "145+ Auctions",
    color: "#3b82f6",
  },
  {
    title: "Laptops",
    icon: <FaLaptop />,
    auctions: "82+ Auctions",
    color: "#8b5cf6",
  },
  {
    title: "Cameras",
    icon: <FaCamera />,
    auctions: "64+ Auctions",
    color: "#06b6d4",
  },
  {
    title: "Vehicles",
    icon: <FaCar />,
    auctions: "51+ Auctions",
    color: "#f97316",
  },
  {
    title: "Furniture",
    icon: <FaCouch />,
    auctions: "98+ Auctions",
    color: "#10b981",
  },
  {
    title: "Luxury",
    icon: <FaGem />,
    auctions: "36+ Auctions",
    color: "#ec4899",
  },
  {
    title: "Fashion",
    icon: <FaTshirt />,
    auctions: "124+ Auctions",
    color: "#ef4444",
  },
  {
    title: "Gaming",
    icon: <FaGamepad />,
    auctions: "73+ Auctions",
    color: "#6366f1",
  },
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span>Browse Categories</span>

          <h2>Find Auctions by Category</h2>

          <p>
            Explore thousands of verified products across multiple
            categories.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((item, index) => (
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
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.auctions}</p>

              <button>
                Explore →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}