import {
    FaShieldAlt,
    FaGavel,
    FaEye,
    FaClock,
    FaStar,
    FaUserCheck,
    FaChevronRight
} from "react-icons/fa";

import styles from "./AuctionDrawer.module.css";

export default function AuctionInfo({ auction }) {

    return (

        <section className={styles.infoContainer}>

            {/* PRODUCT TITLE */}

            <div className={styles.productHeader}>

                <span className={styles.categoryBadge}>
                    {auction.category}
                </span>

                <h1 className={styles.productTitle}>
                    {auction.title}
                </h1>

                <div className={styles.statsRow}>

                    <span>
                        <FaStar />
                        {auction.rating || "4.8"}
                    </span>

                    <span>
                        <FaGavel />
                        {auction.bids} Bids
                    </span>

                    <span>
                        <FaEye />
                        {auction.watchers || 18} Watching
                    </span>

                </div>

            </div>

            {/* PRICE CARD */}

            <div className={styles.priceCard}>

                <div>

                    <p>Current Bid</p>

                    <h2>{auction.price}</h2>

                </div>

                <div className={styles.priceGrid}>

                    <div>

                        <small>
                            <FaClock />
                            Ends In
                        </small>

                        <strong>
                            {auction.timeLeft}
                        </strong>

                    </div>

                    <div>

                        <small>Next Bid</small>

                        <strong>
                            {auction.nextBid || "₹1,25,000"}
                        </strong>

                    </div>

                    <div>

                        <small>Buy Now</small>

                        <strong>
                            {auction.buyNow || "₹1,65,000"}
                        </strong>

                    </div>

                    <div>

                        <small>Reserve</small>

                        <strong>
                            {auction.reserve || "Met"}
                        </strong>

                    </div>

                </div>

            </div>

            {/* SELLER */}

<div className={styles.sellerCard}>

    <div className={styles.avatar}>

        {(auction.seller?.name || "AuctionHub").charAt(0)}

    </div>

    <div className={styles.sellerContent}>

        <h3>

            {auction.seller?.name || "AuctionHub Seller"}

        </h3>

        <p>

            <FaUserCheck />

            {auction.seller?.verified ? "Verified Seller" : "Seller"}

        </p>

        <span>

            ⭐ {auction.seller?.rating || "4.9"}

            •

            {auction.seller?.sales || 820} Sales

        </span>

    </div>

</div>

            {/* TRUST BADGES */}

            <div className={styles.badges}>

                <div className={styles.badge}>

                    <FaShieldAlt />

                    Verified Listing

                </div>

                <div className={styles.badge}>

                    <FaShieldAlt />

                    Secure Payments

                </div>

                <div className={styles.badge}>

                    <FaShieldAlt />

                    Buyer Protection

                </div>

            </div>

            {/* QUICK SPECS */}

            <div className={styles.specCard}>

                <h3>

                    Quick Specifications

                </h3>

                <div className={styles.specGrid}>

                    <div>

                        <small>Brand</small>

                        <strong>

                            {auction.brand || "-"}

                        </strong>

                    </div>

                    <div>

                        <small>Condition</small>

                        <strong>

                            {auction.condition || "-"}

                        </strong>

                    </div>

                    <div>

                        <small>Warranty</small>

                        <strong>

                            {auction.warranty || "No Warranty"}

                        </strong>

                    </div>

                    <div>

                        <small>Location</small>

                        <strong>

                            {auction.location || "India"}

                        </strong>

                    </div>

                </div>

            </div>

            {/* DESCRIPTION */}

            <div className={styles.descriptionCard}>

                <h3>

                    Description

                </h3>

                <p>

                    {

                        auction.description ||

                        "No description available."

                    }

                </p>

                <button

                    className={styles.fullDetailsBtn}

                >

                    View Full Details

                    <FaChevronRight />

                </button>

            </div>

        </section>

    );

}