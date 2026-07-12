import { featuredAuctions } from "../../../data/dummyData";
import AuctionCard from "../../auction/AuctionCard/AuctionCard";
import styles from "./RelatedAuctions.module.css";

export default function RelatedAuctions() {
  return (
    <section className={styles.section}>
      <h2>Related Auctions</h2>

      <div className={styles.grid}>
        {featuredAuctions.slice(0,3).map((auction) => (
          <AuctionCard
            key={auction.id}
            auction={auction}
          />
        ))}
      </div>
    </section>
  );
}