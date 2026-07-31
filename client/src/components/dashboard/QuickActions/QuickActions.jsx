import { Link } from "react-router-dom";
import {
  FaPlus,
  FaGavel,
  FaHeart,
  FaUser
} from "react-icons/fa";

import styles from "./QuickActions.module.css";

export default function QuickActions() {
  return (
    <div className={styles.wrapper}>

      <Link to="/create-auction" className={styles.card}>
        <FaPlus />
        <span>Create Auction</span>
      </Link>

      <Link to="/auctions" className={styles.card}>
        <FaGavel />
        <span>Browse Auctions</span>
      </Link>

      <Link to="/watchlist" className={styles.card}>
        <FaHeart />
        <span>Watchlist</span>
      </Link>

      <Link to="/profile" className={styles.card}>
        <FaUser />
        <span>Profile</span>
      </Link>

    </div>
  );
}