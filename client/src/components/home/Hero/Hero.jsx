import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaGavel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

const words = [
  "Bid Smarter.",
  "Win Faster.",
  "Auction with Confidence.",
  "AI Powered Auctions."
];

const stats = [
  { number: "12K+", label: "Users" },
  { number: "850+", label: "Live Auctions" },
  { number: "₹2.4Cr", label: "Trading Volume" },
];

const auctions = [
  {
    title: "MacBook Pro M3",
    bid: "₹1,25,000",
    time: "02:14:18",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200",
  },
  {
    title: "Sony Alpha A7 IV",
    bid: "₹1,75,000",
    time: "01:08:43",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200",
  },
  {
    title: "iPhone 15 Pro",
    bid: "₹95,000",
    time: "03:42:15",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a204b3d1a12?w=1200",
  },
];


export default function Hero() {

  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [auction, setAuction] = useState(0);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("auctionhub-user");
  const handleStartBidding = () => {

    if (isLoggedIn) {

        navigate("/auctions");

    } else {

        navigate("/login", {
            state: { from: "/auctions" }
        });

    }

};

const handleSellItem = () => {

    if (isLoggedIn) {

        navigate("/seller/create-auction");

    } else {

        navigate("/login", {
            state: { from: "/seller/create-auction" }
        });

    }

};

  useEffect(() => {

    let index = 0;

    const typing = setInterval(() => {

      setText(words[word].slice(0, index));

      index++;

      if (index > words[word].length) {

        clearInterval(typing);

        setTimeout(() => {

          setWord((word + 1) % words.length);

          setText("");

        }, 1800);

      }

    }, 80);

    return () => clearInterval(typing);

  }, [word]);

  useEffect(() => {

    const slider = setInterval(() => {

      setAuction((prev) => (prev + 1) % auctions.length);

    }, 4000);

    return () => clearInterval(slider);

  }, []);

  return (
    <section className={styles.hero}>

      <div className={styles.overlay}></div>

      <div className={styles.container}>

        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className={styles.badge}>
            AI Powered Auction Platform
          </span>

          <h1>
            {text}
            <span className={styles.cursor}>|</span>
          </h1>

          <p>
            Buy and sell premium products through secure live auctions.
            AI verification, instant bidding, real-time updates,
            and trusted sellers all in one place.
          </p>

          <div className={styles.buttons}>

            <button className={styles.primary} onClick={handleStartBidding}>
              Start Bidding
              <FaArrowRight />
            </button>

            <button className={styles.secondary} onClick={handleSellItem}>
              <FaGavel />
              Sell an Item
            </button>

          </div>

          <div className={styles.stats}>

            {stats.map((item) => (

              <div key={item.label}>

                <h2>{item.number}</h2>

                <span>{item.label}</span>

              </div>

            ))}

          </div>

        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
        >

          <div className={styles.auctionCard}>

            <img
              src={auctions[auction].image}
              alt=""
            />

            <div className={styles.content}>

              <span className={styles.live}>
                ● LIVE AUCTION
              </span>

              <h3>
                {auctions[auction].title}
              </h3>

              <div className={styles.info}>

                <div>

                  <small>Current Bid</small>

                  <strong>
                    {auctions[auction].bid}
                  </strong>

                </div>

                <div>

                  <small>Ends In</small>

                  <strong>
                    {auctions[auction].time}
                  </strong>

                </div>

              </div>

              <button>
                View Auction
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );

}