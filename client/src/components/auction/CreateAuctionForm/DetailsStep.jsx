import styles from "./CreateAuctionForm.module.css";

export default function DetailsStep() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>Auction Details</h2>
        <p>Provide the basic information about your product.</p>
      </div>

      <div className={styles.formGroup}>
        <label>Auction Title</label>
        <input
          type="text"
          placeholder="Apple MacBook Pro M3 Max 16-inch"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Description</label>
        <textarea
          rows="5"
          placeholder="Describe the product, accessories, warranty and condition..."
        />
      </div>

      <div className={styles.grid}>
        <div className={styles.formGroup}>
          <label>Category</label>

          <select>
            <option>Select Category</option>
            <option>Electronics</option>
            <option>Mobiles</option>
            <option>Gaming</option>
            <option>Fashion</option>
            <option>Vehicles</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Brand</label>

          <input
            type="text"
            placeholder="Apple"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Starting Price (₹)</label>

          <input
            type="number"
            placeholder="100000"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Auction End Date</label>

          <input type="datetime-local" />
        </div>
      </div>
    </div>
  );
}