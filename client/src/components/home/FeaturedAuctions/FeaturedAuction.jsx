import { useState, useEffect } from "react";
import {
    FaClock,
    FaFire,
    FaEye,
    FaCheckCircle,
    FaStar,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
} from "../../../utils/watchlist";

import AuctionDrawer from "../../auction/AuctionDrawer/AuctionDrawer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./FeaturedAuction.module.css";

function AuctionCard({ item, onView }) {

    const [liked, setLiked] = useState(isInWatchlist(item.id));

    const [time, setTime] = useState(item.ends);

    useEffect(() => {

        const interval = setInterval(() => {

            setTime((prev) => (prev > 0 ? prev - 1 : 0));

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const h = String(Math.floor(time / 3600)).padStart(2, "0");

    const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");

    const s = String(time % 60).padStart(2, "0");

    return (

        <motion.div
            className={styles.card}
            whileHover={{ y: -8 }}
            transition={{ duration: .25 }}
        >

            <div className={styles.imageBox}>

                <img
                    src={item.image}
                    alt={item.title}
                />

                <button
                    className={styles.heart}
                    onClick={() => {

                        if (liked) {

                            removeFromWatchlist(item.id);

                        } else {

                            addToWatchlist(item);

                        }

                        setLiked(!liked);

                    }}
                >

                    <span className={styles.heartIcon}>

                        {liked ? "❤️" : "🤍"}

                    </span>

                </button>

                <div className={styles.verify}>

                    <FaCheckCircle />

                    AI Verified

                </div>

                {time < 1800 && (

                    <div className={styles.ending}>

                        🔥 Ending Soon

                    </div>

                )}

            </div>

            <div className={styles.content}>

                <span className={styles.category}>

                    {item.category}

                </span>

                <h3>

                    {item.title}

                </h3>

                <div className={styles.rating}>

                    <FaStar />

                    {item.rating}

                    <span>

                        {item.seller?.name}

                    </span>

                </div>

                <div className={styles.price}>

                    <small>

                        Current Bid

                    </small>

                    <strong>

                        ₹{item.currentBid.toLocaleString()}

                    </strong>

                </div>

                <div className={styles.info}>

                    <div>

                        <FaClock />

                        {h}:{m}:{s}

                    </div>

                    <div>

                        <FaEye />

                        {item.watching}

                    </div>

                    <div>

                        <FaFire />

                        {item.bids}

                    </div>

                </div>

                <button
                    className={styles.bidBtn}
                    onClick={() => onView(item)}
                >

                    View Auction

                </button>

            </div>

        </motion.div>

    );

}

export default function FeaturedAuctions({ auctions }) {

    const [selectedAuction, setSelectedAuction] = useState(null);

    const data = auctions || [];

    return (

        <section className={styles.section}>

            <div className={styles.container}>

                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <span className={styles.badge}>

                        🔥 FEATURED AUCTIONS

                    </span>

                    <h2>

                        Featured Live Auctions

                    </h2>

                    <p>

                        Bid on premium verified products from trusted sellers across India.

                    </p>

                </motion.div>

                <Swiper

                    modules={[Navigation, Pagination, Autoplay]}

                    autoplay={{

                        delay: 4000,

                        disableOnInteraction: false,

                    }}

                    navigation

                    pagination={{

                        clickable: true,

                    }}

                    loop={data.length > 4}

                    spaceBetween={24}

                    breakpoints={{

                        320: {

                            slidesPerView: 1,

                        },

                        700: {

                            slidesPerView: 2,

                        },

                        1100: {

                            slidesPerView: 3,

                        },

                        1400: {

                            slidesPerView: 4,

                        },

                    }}

                >

                    {data.map((item) => (

                        <SwiperSlide key={item.id}>

                            <AuctionCard

                                item={item}

                                onView={setSelectedAuction}

                            />

                        </SwiperSlide>

                    ))}

                </Swiper>

                <AuctionDrawer

                    open={selectedAuction !== null}

                    auction={selectedAuction}

                    onClose={() => setSelectedAuction(null)}

                />

            </div>

        </section>

    );

}