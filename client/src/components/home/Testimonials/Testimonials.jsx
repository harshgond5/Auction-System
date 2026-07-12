import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Buyer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "AuctionHub made buying electronics incredibly simple. The bidding process was smooth and transparent.",
  },
  {
    name: "Priya Singh",
    role: "Seller",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "I sold my laptop within a day. The AI pricing suggestions were surprisingly accurate.",
  },
  {
    name: "Arjun Patel",
    role: "Collector",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Beautiful interface, secure payments and real-time bidding. Easily the best auction platform I've used.",
  },
  {
    name: "Sneha Gupta",
    role: "Buyer",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "The experience feels premium. Everything from login to bidding is fast and intuitive.",
  },
];
export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span>Testimonials</span>

          <h2>What Our Users Say</h2>

          <p>
            Thousands of buyers and sellers trust AuctionHub every day.
          </p>
        </div>

        <div className={styles.slider}>
          <motion.div
            className={styles.track}
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div className={styles.card} key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className={styles.stars}>
                  {[1,2,3,4,5].map((star)=>(
                    <FaStar key={star}/>
                  ))}
                </div>

                <p className={styles.review}>
                  "{item.review}"
                </p>

                <h3>{item.name}</h3>

                <span>{item.role}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}