import { Link, useNavigate } from "react-router-dom";
import styles from "./MyAuctions.module.css";
import { formatCurrency } from "../../../utils/format";

export default function MyAuctions({ auctions = [], loading }) {
    const navigate = useNavigate();

    return (
        <div className={styles.card}>
            <h2>My Auctions</h2>

            {loading && <p>Loading...</p>}

            {!loading && auctions.length === 0 && (
                <p>
                    You haven't created any auctions yet.{" "}
                    <Link to="/create-auction">Create one</Link>.
                </p>
            )}

            {!loading && auctions.length > 0 && (
                <table style={{ width: "100%", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Current Bid</th>
                            <th>Bids</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {auctions.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <Link to={`/auctions/${item._id}`}>
                                        <strong>{item.title}</strong>
                                    </Link>
                                </td>
                                <td>{item.status}</td>
                                <td>{formatCurrency(item.currentBid || item.startingPrice)}</td>
                                {/* FIXED: Schema uses totalBids, not bidCount */}
                                <td>{item.totalBids || 0}</td>
                                <td style={{ display: "flex", gap: "10px" }}>
                                    <button onClick={() => navigate(`/auctions/${item._id}`)}>
                                        View
                                    </button>
                                    <button onClick={() => console.log("Edit:", item._id)}>
                                        Edit
                                    </button>
                                    <button onClick={() => console.log("Delete:", item._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}