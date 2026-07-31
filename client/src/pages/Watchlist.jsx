import { useState } from "react";

import AuctionCard from "../components/auction/AuctionCard/AuctionCard";
import AuctionDrawer from "../components/auction/AuctionDrawer/AuctionDrawer";

import { watchlist } from "../data/dummyData";

export default function Watchlist() {

    const [selectedAuction, setSelectedAuction] = useState(null);

    return (

        <div
            style={{
                maxWidth: "1200px",
                margin: "40px auto",
                padding: "0 20px",
            }}
        >

            <h1>My Watchlist</h1>

            <p
                style={{
                    color: "#6b7280",
                    margin: "8px 0 32px",
                }}
            >
                Auctions you've saved for later.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                    gap: "24px",
                }}
            >

                {watchlist.map((auction) => (

                    <AuctionCard
                        key={auction.id}
                        auction={auction}
                        onView={setSelectedAuction}
                    />

                ))}

            </div>

            <AuctionDrawer
                open={selectedAuction !== null}
                auction={selectedAuction}
                onClose={() => setSelectedAuction(null)}
            />

        </div>

    );

}