import ImageGallery from "../components/auctionDetails/ImageGallery/ImageGallery";
import ProductInfo from "../components/auctionDetails/ProductInfo/ProductInfo";
import BidPanel from "../components/auctionDetails/BidPanel/BidPanel";
import BidHistory from "../components/auctionDetails/BidHistory/BidHistory";
import SellerCard from "../components/auctionDetails/SellerCard/SellerCard";
import FraudBadge from "../components/auctionDetails/FraudBadge/FraudBadge";
import RelatedAuctions from "../components/auctionDetails/RelatedAuctions/RelatedAuctions";

import {
  auctionDetails,
  bidHistory,
  seller,
  relatedAuctions,
} from "../data/dummyData";

export default function AuctionDetails() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "32px",
        }}
      >
        <ImageGallery images={auctionDetails.images} />

        <div>
          <ProductInfo auction={auctionDetails} />

          <div style={{ marginTop: "24px" }}>
            <FraudBadge risk={auctionDetails.risk} />
          </div>

          <div style={{ marginTop: "24px" }}>
            <BidPanel auction={auctionDetails} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <SellerCard seller={seller} />
      </div>

      <div style={{ marginTop: "40px" }}>
        <BidHistory bids={bidHistory} />
      </div>

      <div style={{ marginTop: "40px" }}>
        <RelatedAuctions auctions={relatedAuctions} />
      </div>
    </div>
  );
}