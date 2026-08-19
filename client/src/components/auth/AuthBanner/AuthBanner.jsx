import {
  FiShield,
  FiZap,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import styles from "./AuthBanner.module.css";

export default function AuthBanner() {
  return (
    <div className={styles.banner}>
      {/* Background */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
      <div className={styles.lines}></div>

      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoBox}></div>

        <span>AuctionHub</span>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <h1>
          Secure the Future
          <br />
          of Smart Auctions.
        </h1>

        <p>
          Experience secure AI-powered live auctions with fraud detection,
          verified sellers and real-time bidding.
        </p>
      </div>

      {/* Feature Pills */}
      <div className={styles.pills}>
        <div>
          <FiShield />
          KYC Verified
        </div>

        <div>
          <FiZap />
          AI Detection
        </div>

        <div>
          <FiClock />
          Live Auctions
        </div>

        <div>
          <FiCheckCircle />
          Instant Updates
        </div>
      </div>

      {/* Floating Card */}
      <div className={styles.card}>
        <div className={styles.avatar}>R</div>

        <div>
          <h3>Rahul Sharma</h3>

          <span>Professional Collector</span>

          <p>
            “AuctionHub provides the smoothest real-time bidding experience
            I've ever used.”
          </p>
        </div>
      </div>
    </div>
  );
}