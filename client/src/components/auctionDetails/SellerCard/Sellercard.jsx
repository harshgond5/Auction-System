import styles from "./Sellercard.module.css";

export default function SellerCard({ seller }) {

  if (!seller) return null;

  return (
    <div className={styles.card}>
      <h2>Seller</h2>

      <h3>{seller.name || "Unknown Seller"}</h3>

      <p>{seller.email}</p>
    </div>
  );
}
