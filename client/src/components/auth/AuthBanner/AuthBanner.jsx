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

      {/* Floating Review Cards Showcase */}
      <div className={styles.cardContainer}>
        {/* Review 1 */}
        <div className={styles.card}>
          <div className={styles.avatar}>H</div>
          <div>
            <h3>Harsh</h3>
            <span>Lead Platform Architects</span>
            <p>
              “AuctionHub provides the smoothest real-time bidding experience
              I've ever built and used.”
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className={styles.card}>
          <div className={styles.avatar}>A</div>
          <div>
            <h3>Huda</h3>
            <span>Frequent Collector</span>
            <p>
              “The live bid security and instant updates give me complete
              peace of mind during high-stakes auctions.”
            </p>
          </div>
        </div>

        {/* Review 3 */}
        <div className={styles.card}>
          <div className={styles.avatar}>P</div>
          <div>
            <h3>Himanshu</h3>
            <span>Verified Seller</span>
            <p>
              “Listing high-value items has never been easier. The KYC and AI
              fraud detection keep everything safe.”
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.avatar}>P</div>
          <div>
            <h3>HK & team</h3>
            <span>Verified Seller</span>
            <p>
              “Listing high-value items has never been easier. The KYC and AI
              fraud detection keep everything safe.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}