import { useState, useEffect } from "react";
import {
  FiShield,
  FiZap,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

import styles from "./AuthBanner.module.css";

// We put the reviews in an array to easily rotate them
const reviews = [
  {
    avatar: "H",
    name: "Harsh",
    title: "Lead Platform Architects",
    text: "“AuctionHub provides the smoothest real-time bidding experience I've ever built and used.”",
  },
  {
    avatar: "H",
    name: "Huda",
    title: "Frequent Collector",
    text: "“The live bid security and instant updates give me complete peace of mind during high-stakes auctions.”",
  },
  {
    avatar: "H",
    name: "Himanshu",
    title: "Verified Seller",
    text: "“Listing high-value items has never been easier. The KYC and AI fraud detection keep everything safe.”",
  },
  {
    avatar: "HK",
    name: "HK & team",
    title: "Verified Seller",
    text: "“Listing high-value items has never been easier. The KYC and AI fraud detection keep everything safe.”",
  },
];

export default function AuthBanner() {
  // Initialize state with a random review index on refresh
  const [currentIndex, setCurrentIndex] = useState(() => 
    Math.floor(Math.random() * reviews.length)
  );

  // Set up the 20-second rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 20000); // 20000ms = 20 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const activeReview = reviews[currentIndex];

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
        <div><FiShield /> KYC Verified</div>
        <div><FiZap /> AI Detection</div>
        <div><FiClock /> Live Auctions</div>
        <div><FiCheckCircle /> Instant Updates</div>
      </div>
     <div></div>
      {/* Rotating Review Card Wrapper */}
      <div className={styles.cardContainer}>
        {/* We use a key based on the index to force the fade-in animation to replay when it changes */}
        <div key={currentIndex} className={styles.card}>
          <div className={styles.avatar}>{activeReview.avatar}</div>
          <div>
            <h3>{activeReview.name}</h3>
            <span>{activeReview.title}</span>
            <p>{activeReview.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}