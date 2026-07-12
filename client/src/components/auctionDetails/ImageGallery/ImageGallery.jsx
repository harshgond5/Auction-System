import { auctionDetails } from "../../../data/dummyData";
import styles from "./ImageGallery.module.css";

export default function ImageGallery() {
  return (
    <div className={styles.gallery}>
      <img
        src={auctionDetails.images[0]}
        alt={auctionDetails.title}
        className={styles.mainImage}
      />

      <div className={styles.thumbnails}>
        {auctionDetails.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Preview ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}