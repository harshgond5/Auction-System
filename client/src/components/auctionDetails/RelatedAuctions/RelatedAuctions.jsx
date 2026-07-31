import { useState } from "react";

import { featuredAuctions } from "../../../data/dummyData";

import AuctionCard from "../../auction/AuctionCard/AuctionCard";
import AuctionDrawer from "../../auction/AuctionDrawer/AuctionDrawer";

import styles from "./RelatedAuctions.module.css";

export default function RelatedAuctions() {

    const [selectedAuction, setSelectedAuction] = useState(null);

    return (

        <section className={styles.section}>

            <h2>Related Auctions</h2>

            <div className={styles.grid}>

                {featuredAuctions.slice(0, 3).map((auction) => (

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

        </section>

    );

}