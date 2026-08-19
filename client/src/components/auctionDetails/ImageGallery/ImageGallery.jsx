import { useState } from "react";
import styles from "./ImageGallery.module.css";
import { resolveImageUrl } from "../../../utils/format";

export default function ImageGallery({ auction }) {

  const images = auction?.images?.length > 0
    ? auction.images
    : ["/images/default-avatar.png"];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <img
        src={resolveImageUrl(images[activeIndex])}
        alt={auction?.title}
        className={styles.mainImage}
      />

      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={resolveImageUrl(img)}
            alt={`Preview ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            style={{
              cursor: "pointer",
              outline: index === activeIndex ? "2px solid #4f46e5" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
