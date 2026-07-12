import AuctionCard from "../AuctionCard/AuctionCard";
import styles from "./AuctionsGrid.module.css";

const auctions = [
  {
    id: 1,
    title: "MacBook Pro M3",
    category: "Electronics",
    price: "₹1,25,000",
    bids: 18,
    timeLeft: "2h 30m",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    category: "Mobiles",
    price: "₹92,000",
    bids: 34,
    timeLeft: "1h 15m",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    title: "Sony Alpha Camera",
    category: "Cameras",
    price: "₹74,500",
    bids: 12,
    timeLeft: "5h 10m",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "Gaming Laptop",
    category: "Computers",
    price: "₹88,000",
    bids: 27,
    timeLeft: "3h 40m",
    image: "https://picsum.photos/400/300?random=4",
  },
];

export default function AuctionsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {auctions.map((auction) => (
          <AuctionCard
            key={auction.id}
            auction={auction}
          />
        ))}
      </div>
    </section>
  );
}