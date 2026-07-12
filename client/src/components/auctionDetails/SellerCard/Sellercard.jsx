import { auctionDetails } from "../../../data/dummyData";
import styles from "./SellerCard.module.css";

export default function SellerCard() {
  const seller = auctionDetails.seller;

  return (
    <div className={styles.card}>
      <h2>Seller</h2>

      <h3>{seller.name}</h3>

      <p>⭐ {seller.rating}</p>

      <span>
        {seller.verified ? "✔ Verified Seller" : "Not Verified"}
      </span>
    </div>
  );
}