import styles from "./CreateAuctionForm.module.css";

export default function AssetsStep() {
  return (
    <div className={styles.section}>

      <div className={styles.sectionHeader}>
        <h2>Product Assets</h2>
        <p>Upload product images and additional details.</p>
      </div>

      <div className={styles.uploadArea}>
        <div className={styles.uploadIcon}>
          📷
        </div>

        <h3>Upload Product Images</h3>

        <p>
          Drag & Drop images here or click to browse.
        </p>

        <button
          type="button"
          className={styles.uploadBtn}
        >
          Choose Images
        </button>

        <input
          type="file"
          multiple
          className={styles.hiddenInput}
        />
      </div>

      <div className={styles.previewGrid}>

        <div className={styles.previewCard}>
          Image Preview
        </div>

        <div className={styles.previewCard}>
          Image Preview
        </div>

        <div className={styles.previewCard}>
          Image Preview
        </div>

        <div className={styles.previewCard}>
          Image Preview
        </div>

      </div>

      <div className={styles.grid}>

        <div className={styles.formGroup}>
          <label>Condition</label>

          <select>
            <option>New</option>
            <option>Like New</option>
            <option>Good</option>
            <option>Used</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Location</label>

          <input
            type="text"
            placeholder="Greater Noida"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Shipping</label>

          <select>
            <option>Free Shipping</option>
            <option>Paid Shipping</option>
            <option>Pickup Only</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Estimated Delivery</label>

          <input
            type="text"
            placeholder="3-5 Days"
          />
        </div>

      </div>

    </div>
  );
}