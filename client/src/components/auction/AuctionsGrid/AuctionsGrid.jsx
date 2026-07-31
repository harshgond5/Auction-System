import { useState } from "react";

import AuctionCard from "../AuctionCard/AuctionCard";
import AuctionDrawer from "../AuctionDrawer/AuctionDrawer";

import { featuredAuctions } from "../../../data/dummyData";

import styles from "./AuctionsGrid.module.css";

export default function AuctionsGrid() {

    const [selectedAuction, setSelectedAuction] = useState(null);

    return (

        <section className={styles.section}>

            <div className={styles.grid}>

                {featuredAuctions.map((auction) => (

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