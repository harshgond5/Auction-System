import {
    ArrowLeft,
    Heart,
    Share2,
    X,
    Laptop,
    Smartphone,
    Camera,
    Watch,
    Activity,
    BadgeCheck
} from "lucide-react";

import styles from "./AuctionDrawer.module.css";

export default function DrawerHeader({

    auction,

    wishlisted,

    onWishlist,

    onShare,

    onClose

}) {

    function getCategoryIcon(category){

        switch(category?.toLowerCase()){

            case "electronics":
                return <Laptop size={14}/>;

            case "mobiles":
                return <Smartphone size={14}/>;

            case "camera":
                return <Camera size={14}/>;

            case "watches":
                return <Watch size={14}/>;

            default:
                return <Laptop size={14}/>;

        }

    }

    return(

        <header className={styles.header}>

            {/* LEFT */}

            <div className={styles.headerLeft}>
                <div className={styles.headerText}>
                    <h2>

                        {auction.title}

                    </h2>

                </div>

            </div>

            {/* CENTER */}

            <div className={styles.headerCenter}>

                <div className={styles.categoryBadge}>

                    {getCategoryIcon(auction.category)}

                    <span>

                        {auction.category}

                    </span>

                </div>

                <div className={styles.liveBadge}>

                    <Activity size={14}/>

                    LIVE

                </div>

            </div>

            {/* RIGHT */}

            <div className={styles.headerActions}>

    {/* Wishlist */}

    <button
        className={`${styles.actionButton} ${
            wishlisted ? styles.activeAction : ""
        }`}
        onClick={onWishlist}
        title="Add to Wishlist"
    >
        <Heart
            size={18}
            color="black"
            fill={wishlisted ? "currentColor" : "none"}
        />
    </button>

    <div className={styles.headerDivider}></div>

    {/* Share */}

    <button
        className={styles.actionButton}
        onClick={onShare}
        title="Share Auction"
    >
        <Share2 size={18}
                color="black"/>
    </button>

    <div className={styles.headerDivider}></div>

    {/* Close */}

    <button
        className={styles.closeButton}
        onClick={onClose}
        title="Close Drawer"
    >
        <X size={18} 
            color="black"/>
    </button>
</div>

        </header>

    );

}