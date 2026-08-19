import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuctionCard from "../../auction/AuctionCard/AuctionCard";
import { getAuctions } from "../../../services/auctionService";

import styles from "./RelatedAuctions.module.css";

export default function RelatedAuctions({ auction }) {

    const navigate = useNavigate();
    const [related, setRelated] = useState([]);

    useEffect(() => {

        if (!auction?.category) return;

        let isMounted = true;

        async function loadRelated() {
            try {
                const data = await getAuctions({ category: auction.category });

                if (isMounted) {
                    setRelated(
                        (data.auctions || [])
                            .filter((item) => item._id !== auction._id)
                            .slice(0, 3)
                    );
                }
            } catch (err) {
                console.error(err);
            }
        }

        loadRelated();

        return () => {
            isMounted = false;
        };

    }, [auction?.category, auction?._id]);

    if (related.length === 0) return null;

    return (

        <section className={styles.section}>

            <h2>Related Auctions</h2>

            <div className={styles.grid}>

                {related.map((item) => (

                    <AuctionCard
                        key={item._id}
                        auction={item}
                        onView={(a) => navigate(`/auctions/${a._id}`)}
                    />

                ))}

            </div>

        </section>

    );

}
