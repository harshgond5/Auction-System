import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuctionCard from "../AuctionCard/AuctionCard";
import { getAuctions } from "../../../services/auctionService";

import styles from "./AuctionsGrid.module.css";

export default function AuctionsGrid() {
    const navigate = useNavigate();

    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function loadAuctions() {
            try {
                setLoading(true);
                setError("");

                const response = await getAuctions();

                console.log("🔵 AUCTIONS API RESPONSE:", response);
                console.log("🔵 AUCTIONS DATA:", response?.data);

                // Backend response:
                // {
                //   success: true,
                //   data: [...]
                // }

                const auctionList = Array.isArray(response?.data)
                    ? response.data
                    : Array.isArray(response?.auctions)
                    ? response.auctions
                    : [];

                console.log("🟢 FINAL AUCTION LIST:", auctionList);
                console.log("🟢 AUCTION COUNT:", auctionList.length);

                if (isMounted) {
                    setAuctions(auctionList);
                }

            } catch (err) {
                console.error("🔴 AUCTION LOAD ERROR:", err);

                if (isMounted) {
                    setError("Unable to load auctions. Please try again.");
                }

            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        loadAuctions();

        return () => {
            isMounted = false;
        };
    }, []);

    function handleView(auction) {
        navigate(`/auctions/${auction._id}`);
    }

    if (loading) {
        return (
            <section className={styles.section}>
                <p>Loading auctions...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className={styles.section}>
                <p>{error}</p>
            </section>
        );
    }

    if (auctions.length === 0) {
        return (
            <section className={styles.section}>
                <p>No auctions found. Be the first to create one!</p>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {auctions.map((auction) => (
                    <AuctionCard
                        key={auction._id}
                        auction={auction}
                        onView={handleView}
                    />
                ))}
            </div>
        </section>
    );
}