import { useEffect, useState } from "react";
import Hero from "../components/home/Hero/Hero";
import FeaturedAuctions from "../components/home/FeaturedAuctions/FeaturedAuction";
import LiveActivity from "../components/home/LiveActivity/LiveActivity";
import HowItWorks from "../components/home/HowItWorks/HowItWorks";
import Categories from "../components/home/Categories/Categories";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";
import Stats from "../components/home/Stats/Stats";
import Testimonials from "../components/home/Testimonials/Testimonials";

import { getFeaturedAuctions } from "../services/auctionService";

// Adapts a real Auction document from the API into the shape
// FeaturedAuctions/AuctionCard already expects (kept from the old dummy data).
function mapAuctionToCard(a) {
  const endsInSeconds = Math.max(
    0,
    Math.floor((new Date(a.endTime).getTime() - Date.now()) / 1000)
  );
  return {
    id: a._id,
    title: a.title,
    category: a.category,
    seller: {
      name: a.seller?.name || "Unknown Seller",
      rating: a.seller?.rating ?? 5,
      verified: true,
      location: "",
    },
    rating: a.seller?.rating ?? 5,
    currentBid: a.currentBid || a.startingPrice,
    startingBid: a.startingPrice,
    minimumIncrement: a.minimumBidIncrement,
    bids: a.totalBids || 0,
    watching: 0,
    image: a.images?.[0] || "https://picsum.photos/seed/placeholder/800/600",
    images: a.images,
    ends: endsInSeconds,
    endTime: a.endTime,
    description: a.description,
    status: a.status,
  };
}

export default function Home() {
  const [featuredAuctions, setFeaturedAuctions] = useState([]);

  useEffect(() => {
    let active = true;
    getFeaturedAuctions()
      .then((res) => {
        if (active) setFeaturedAuctions((res.data || []).map(mapAuctionToCard));
      })
      .catch((err) => console.error("Failed to load featured auctions:", err));
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Hero />

      <FeaturedAuctions auctions={featuredAuctions} />

      <Categories />
      <LiveActivity />
      <WhyChoose />
      <Stats />

      <HowItWorks />

      <Testimonials />
     
    </>
  );
}