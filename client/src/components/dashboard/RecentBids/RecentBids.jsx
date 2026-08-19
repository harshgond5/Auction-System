import { Link } from "react-router-dom";
import styles from "./RecentBids.module.css";
import { formatCurrency } from "../../../utils/format";

export default function RecentBids({ bids = [], loading }){

    const recent = bids.slice(0, 5);

    return(

        <div className={styles.card}>

            <h2>Recent Bids</h2>

            {loading && <p>Loading...</p>}

            {!loading && recent.length === 0 && (
                <p>You haven't placed any bids yet.</p>
            )}

            {!loading && recent.map((bid) => (

                <div
                    key={bid._id}
                    className={styles.row}
                >
                    <span>
                        <Link to={`/auctions/${bid.auction?._id}`}>
                            {bid.auction?.title || "Auction"}
                        </Link>
                    </span>

                    <strong>{formatCurrency(bid.amount)}</strong>

                </div>

            ))}

        </div>

    )

}
