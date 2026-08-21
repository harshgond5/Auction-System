import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.brand}>
          <h2>AuctionHub</h2>
          <p>
            Buy and sell premium products through secure live auctions powered
            by AI.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/auctions">Auctions</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/create-auction">Sell Product</Link>
        </div>

        <div>
          <h3>Categories</h3>

          <a href="/">Electronics</a>
          <a href="/">Mobiles</a>
          <a href="/">Fashion</a>
          <a href="/">Vehicles</a>
        </div>

        <div>
          <h3>Contact</h3>

          <p>harshkrgond@gmail.com</p>
          <p>+91 9532662020</p>
          <p>India</p>
        </div>

      </div>

      <div className={styles.bottom}>
        © 2026 AuctionHub. All rights reserved.
      </div>
    </footer>
  );
}