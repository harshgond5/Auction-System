import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGavel,
  FaUserCircle,
  FaArrowUp,
} from "react-icons/fa";

import { getLiveActivity } from "../../../services/bidService";
import { socket } from "../../../socket";

import styles from "./LiveActivity.module.css";

function formatAmount(amount) {
  return `₹${Number(amount || 0).toLocaleString("en-IN")}`;
}

export default function LiveActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let active = true;

    // 1. Load recent activity from the backend
    getLiveActivity()
      .then((res) => {
        if (active && res.success) setActivities(res.data || []);
      })
      .catch((err) => console.error("Failed to load live activity:", err));

    // 2. Listen for new bids as they happen, anywhere on the site
    const handleNewActivity = (bid) => {
      setActivities((prev) => [bid, ...prev].slice(0, 8));
    };
    socket.on("newLiveActivity", handleNewActivity);

    return () => {
      active = false;
      socket.off("newLiveActivity", handleNewActivity);
    };
  }, []);

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
          {activities.length === 0 && (
            <p style={{ color: "#64748b" }}>No bids yet — be the first to place one!</p>
          )}
          {activities.map((item, index) => (
            <motion.div
              key={item._id || index}
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
                <h4>{item.bidderName || "Bidder"}</h4>

                <p>
                  placed a bid on <strong>{item.auctionTitle}</strong>
                </p>
              </div>

              <div className={styles.amount}>
                <strong>{formatAmount(item.amount)}</strong>

                <span
                  style={{
                    background: "#2563eb",
                  }}
                >
                  <FaGavel />
                  New Bid
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
